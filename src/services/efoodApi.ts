import type Restaurant from '../models/Restaurant'
import type { DeliveryData } from '../components/Delivery'
import type Dish from '../models/Dish'

const API_URL = (process.env.REACT_APP_EFOOD_API_URL || '').replace(/\/$/, '')
type Tokens = { access: string; refresh: string }
let tokens: Tokens | null = null
let refreshing: Promise<void> | null = null
export type OrderResponse = {
    id: string
    total: string
    status: string
    payment_status: string
}
export type OrderPayload = {
    items: { product_id: number; quantity: number }[]
    delivery: {
        receiver: string
        address: string
        city: string
        zip_code: string
        number: string
        complement: string
    }
}
function describe(value: unknown): string {
    if (typeof value === 'string') return value
    if (Array.isArray(value)) return value.map(describe).join(' ')
    if (value && typeof value === 'object')
        return Object.values(value).map(describe).join(' ')
    return 'Não foi possível concluir a solicitação.'
}
async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
    if (!API_URL)
        throw new Error(
            'A URL da API não está configurada. Defina REACT_APP_EFOOD_API_URL e reinicie o aplicativo.',
        )
    const response = await fetch(`${API_URL}${path}`, options)
    const data = await response.json().catch(() => ({}))
    if (!response.ok)
        throw new Error(
            describe(
                data.error?.details ||
                    data.detail ||
                    'Não foi possível concluir a solicitação.',
            ),
        )
    return data as T
}
export async function authenticate(
    username: string,
    password: string,
    register: boolean,
): Promise<void> {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    }
    if (register) await request('/auth/register/', options)
    tokens = await request<Tokens>('/auth/token/', options)
}
export function hasSession(): boolean {
    return tokens !== null
}
export function clearSession(): void {
    tokens = null
}
export async function logout(): Promise<void> {
    const refresh = tokens?.refresh
    tokens = null
    if (refresh)
        await request('/auth/logout/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ refresh }),
        })
}
const placeholder =
    'data:image/svg+xml;charset=utf-8,' +
    encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450"><rect width="800" height="450" fill="#f3e8db"/><circle cx="400" cy="225" r="130" fill="#fff8ed"/><circle cx="400" cy="225" r="100" fill="none" stroke="#d39a78" stroke-width="6"/><path d="M210 140v170M190 140v55h40v-55M590 140v170" stroke="#a96e50" stroke-width="10" fill="none" stroke-linecap="round"/></svg>',
    )
// Fotos ilustrativas usadas somente para produtos do catálogo de demonstração.
const demoPhotos: Record<string, string> = {
    'Pizza de cogumelos':
        'https://images.unsplash.com/photo-1614442316719-1e38c661c29c?auto=format&fit=crop&w=900&q=80',
    'Prato executivo':
        'https://images.unsplash.com/photo-1762631383556-7fa1365898b7?auto=format&fit=crop&w=900&q=80',
    'Legumes assados':
        'https://images.unsplash.com/photo-1606791422814-b32c705e3e2f?auto=format&fit=crop&w=900&q=80',
}

function photoForDish(dish: Dish): string {
    if (!dish.foto) return demoPhotos[dish.nome] || placeholder
    if (dish.nome === 'Legumes assados' && dish.foto.includes('photo-1512621776951-a57141f2eefd')) {
        return demoPhotos[dish.nome]
    }
    return dish.foto
}

function withImages(restaurant: Restaurant): Restaurant {
    return {
        ...restaurant,
        capa: restaurant.capa || placeholder,
        cardapio: restaurant.cardapio.map((dish) => ({
            ...dish,
            foto: photoForDish(dish),
        })),
    }
}
export async function getRestaurants(
    signal?: AbortSignal,
): Promise<Restaurant[]> {
    return (
        await request<Restaurant[]>('/legacy/restaurantes/', { signal })
    ).map(withImages)
}
export async function getRestaurant(
    id: string,
    signal?: AbortSignal,
): Promise<Restaurant> {
    return withImages(
        await request<Restaurant>(
            `/legacy/restaurantes/${encodeURIComponent(id)}/`,
            { signal },
        ),
    )
}
export function orderPayload(
    items: Dish[],
    delivery: DeliveryData,
): OrderPayload {
    return {
        items: items
            .map((item) => ({ product_id: item.id, quantity: 1 }))
            .sort((a, b) => a.product_id - b.product_id),
        delivery: {
            receiver: delivery.receiver,
            address: delivery.address,
            city: delivery.city,
            zip_code: delivery.zipCode,
            number: delivery.number,
            complement: delivery.complement,
        },
    }
}
async function refreshSession(): Promise<void> {
    if (!tokens) throw new Error('Entre na sua conta para concluir o pedido.')
    try {
        tokens = await request<Tokens>('/auth/refresh/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ refresh: tokens.refresh }),
        })
    } catch (error) {
        tokens = null
        throw error
    }
}
export async function placeOrder(
    payload: OrderPayload,
    key: string,
): Promise<OrderResponse> {
    if (!tokens) throw new Error('Entre na sua conta para concluir o pedido.')
    // Rotate before checkout. Concurrent callers share one rotation request.
    if (!refreshing)
        refreshing = refreshSession().finally(() => {
            refreshing = null
        })
    await refreshing
    return request<OrderResponse>('/orders/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${tokens!.access}`,
            'Idempotency-Key': key,
        },
        body: JSON.stringify(payload),
    })
}
