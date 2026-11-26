import {
    Card,
    CardContent,
    CardHeader,
    Description,
    Infos,
    Rating,
    RestaurantImage,
    Tag,
    Title,
    ViewButton
} from './styles'
import { categoryLabel } from '../../utils/categoryLabel'

type Props = {
    id: number
    title: string
    description: string
    image: string
    category: string
    rating: number
    featured?: boolean
}

const RestaurantCard = ({
    id,
    title,
    description,
    image,
    category,
    rating,
    featured = false
}: Props) => (
    <Card
        to={`/perfil/${id}`}
        aria-label={`Ver restaurante ${title}`}
    >
        <RestaurantImage src={image} alt={title} />

        <Infos>
            {featured && <Tag>Destaque da semana</Tag>}
            <Tag>{categoryLabel(category)}</Tag>
        </Infos>

        <CardContent>
            <CardHeader>
                <Title>{title}</Title>

                {rating > 0 && (
                    <Rating aria-label={`Avaliação: ${rating} de 5 estrelas`}>
                        <span>{rating}</span>
                        <span aria-hidden="true">★</span>
                    </Rating>
                )}
            </CardHeader>

            <Description>{description}</Description>

            <ViewButton>Ver restaurante</ViewButton>
        </CardContent>
    </Card>
)

export default RestaurantCard