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

        <Title>Demo order recorded!</Title>

        <Description>
            Your simulated order was saved by the Efood API. No payment was collected
            and no real delivery will take place.
        </Description>

        <OrderCode>
            <OrderLabel>Order number</OrderLabel>
            <strong>{orderId}</strong>
        </OrderCode>

        <Description>
            This portfolio demonstration lets you explore the ordering flow safely.
        </Description>

        <Button type="button" onClick={onFinish}>
            Back to restaurant
        </Button>
    </SuccessCard>
)

export default Confirmation