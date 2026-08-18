import { Button, Description, Title } from './styles'

type Props = {
    orderId: string
    onFinish: () => void
}

const Confirmation = ({ orderId, onFinish }: Props) => (
    <>
        <Title>Pedido realizado - {orderId}</Title>

        <Description>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
            <br />
            <br />
            Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
            realizar cobranças extras.
            <br />
            <br />
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a refeição.
            <br />
            <br />
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
        </Description>

        <Button type="button" onClick={onFinish}>
            Concluir
        </Button>
    </>
)

export default Confirmation