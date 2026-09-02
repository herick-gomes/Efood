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

        <Title>Order confirmed!</Title>

        <Description>
            Your order has been successfully placed and is now being prepared.
            We&apos;ll make sure everything is ready for delivery as soon as possible.
        </Description>

        <OrderCode>
            <OrderLabel>Order number</OrderLabel>
            <strong>{orderId}</strong>
        </OrderCode>

        <Description>
            Please note that our delivery partners are not authorized to request any
            additional payments when your order arrives.
        </Description>

        <Button type="button" onClick={onFinish}>
            Back to restaurant
        </Button>
    </SuccessCard>
)

export default Confirmation