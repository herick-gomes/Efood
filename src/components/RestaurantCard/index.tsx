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
    <Card>
        <RestaurantImage src={image} alt={title} />

        <Infos>
            {featured && <Tag>Featured this week</Tag>}
            <Tag>{category}</Tag>
        </Infos>

        <CardContent>
            <CardHeader>
                <Title>{title}</Title>

                <Rating>
                    <span>{rating}</span>
                    <span aria-label="rating">★</span>
                </Rating>
            </CardHeader>

            <Description>{description}</Description>

            <ViewButton to={`/perfil/${id}`}>View restaurant</ViewButton>
        </CardContent>
    </Card>
)

export default RestaurantCard