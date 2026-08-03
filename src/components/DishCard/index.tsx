import {
    AddButton,
    Card,
    Description,
    DishImage,
    Price,
    Title
} from './styles'

type Props = {
    name: string
    description: string
    image: string
    price: number
}

const DishCard = ({ name, description, image, price }: Props) => (
    <Card>
        <DishImage src={image} alt={name} />

        <Title>{name}</Title>

        <Description>{description}</Description>

        <Price>
            {price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            })}
        </Price>

        <AddButton type="button">Adicionar ao carrinho</AddButton>
    </Card>
)

export default DishCard