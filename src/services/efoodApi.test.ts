import {
    authenticate,
    clearSession,
    getRestaurants,
    hasSession,
    logout,
    orderPayload,
    placeOrder,
} from './efoodApi'
const fetchMock = jest.fn()
const delivery = {
    receiver: 'Demo Person',
    address: 'Demo Street',
    city: 'Niteroi',
    zipCode: '24000-000',
    number: '10',
    complement: '',
}
const dish = {
    id: 1,
    nome: 'Bowl',
    preco: 999,
    descricao: 'Demo',
    foto: '',
    porcao: 'One',
}
const ok = (data: unknown) =>
    Promise.resolve({ ok: true, json: async () => data })
beforeEach(() => {
    global.fetch = fetchMock
    fetchMock.mockReset()
    clearSession()
})

test('checkout never sends client prices or card data and carries the retry key', async () => {
    fetchMock.mockImplementationOnce(() => ok({ access: 'a', refresh: 'r' }))
    await authenticate('demo', 'test-password', false)
    fetchMock.mockImplementationOnce(() => ok({ access: 'a2', refresh: 'r2' }))
    fetchMock.mockImplementationOnce(() =>
        ok({
            id: 'order',
            total: '25.50',
            status: 'placed',
            payment_status: 'simulated_approved',
        }),
    )
    const payload = orderPayload([dish], delivery)
    expect(payload.items).toEqual([{ product_id: 1, quantity: 1 }])
    await placeOrder(payload, 'retry-key')
    const [url, options] = fetchMock.mock.calls[2]
    expect(url).toMatch(/\/orders\/$/)
    expect(options.headers['Idempotency-Key']).toBe('retry-key')
    expect(options.headers.Authorization).toBe('Bearer a2')
    expect(JSON.parse(options.body)).toEqual(payload)
    expect(options.body).not.toMatch(/price|card|cvv|payment/)
})

test('logout clears memory and submits the refresh token for revocation', async () => {
    fetchMock.mockImplementationOnce(() => ok({ access: 'a', refresh: 'r' }))
    await authenticate('demo', 'test-password', false)
    fetchMock.mockImplementationOnce(() => ok({}))
    await logout()
    expect(hasSession()).toBe(false)
    expect(JSON.parse(fetchMock.mock.calls[1][1].body)).toEqual({
        refresh: 'r',
    })
})

test('failed refresh clears authentication instead of sending an expired checkout', async () => {
    fetchMock.mockImplementationOnce(() => ok({ access: 'a', refresh: 'r' }))
    await authenticate('demo', 'test-password', false)
    fetchMock.mockResolvedValueOnce({
        ok: false,
        json: async () => ({ error: { details: { detail: 'Token expired' } } }),
    })
    await expect(
        placeOrder(orderPayload([dish], delivery), 'key'),
    ).rejects.toThrow('Token expired')
    expect(hasSession()).toBe(false)
    expect(fetchMock).toHaveBeenCalledTimes(2)
})

test('catalog provides a local placeholder for demo products without photographs', async () => {
    fetchMock.mockImplementationOnce(() =>
        ok([{ id: 1, titulo: 'Demo', capa: '', cardapio: [dish] }]),
    )
    const data = await getRestaurants()
    expect(data[0].capa).toMatch(/^data:image\/svg/)
    expect(data[0].cardapio[0].foto).toMatch(/^data:image\/svg/)
})
