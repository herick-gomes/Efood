import {
    Hero,
    Overlay,
    Category,
    RestaurantName,
    RestaurantInfo
} from './styles'
import { categoryLabel } from '../../utils/categoryLabel'

type Props = {
    category: string
    name: string
    image: string
}

const RestaurantHero = ({ category, name, image }: Props) => (
    <Hero image={image}>
        <Overlay>
            <div className="container">
                <RestaurantInfo>
                    <Category>{categoryLabel(category)}</Category>

                    <RestaurantName>{name}</RestaurantName>
                </RestaurantInfo>
            </div>
        </Overlay>
    </Hero>
)

export default RestaurantHero