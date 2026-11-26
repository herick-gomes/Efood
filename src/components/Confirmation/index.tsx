import {
    Button,
    ConfirmationIcon,
    Description,
    OrderCode,
    OrderLabel,
    SuccessCard,
    Title
} from './styles'

type Props = {
    orderId: string
    onFinish: () => void
}

const Confirmation = ({ orderId, onFinish }: Props) => (
    <SuccessCard>
        <ConfirmationIcon>✓</ConfirmationIcon>

        <Title>Pedido de demonstração confirmado!</Title>

        <Description>
            Seu pedido foi registrado pela API Efood. Nenhum valor foi cobrado
            e nenhuma entrega real será realizada.
        </Description>

        <OrderCode>
            <OrderLabel>Número do pedido</OrderLabel>
            <strong>{orderId}</strong>
        </OrderCode>

        <Description>
            Esta demonstração permite testar o fluxo de compra com segurança.
        </Description>

        <Button type="button" onClick={onFinish}>
            Voltar ao restaurante
        </Button>
    </SuccessCard>
)

export default Confirmation