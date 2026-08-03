import { Hero, Overlay, Category, RestaurantName } from './styles'

type Props = {
    category: string
    name: string
    image: string
}

const RestaurantHero = ({ category, name, image }: Props) => (
    <Hero image={image}>
        <Overlay>
            <div className="container">
                <Category>{category}</Category>
                <RestaurantName>{name}</RestaurantName>
            </div>
        </Overlay>
    </Hero>
)

export default RestaurantHero