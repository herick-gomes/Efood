import Restaurant from '../../models/Restaurant'
import RestaurantCard from '../RestaurantCard'

import { List, Section } from './styles'

type Props = {
    restaurants: Restaurant[]
}

const RestaurantList = ({ restaurants }: Props) => (
    <Section>
        <div className="container">
            <List>
                {restaurants.map((restaurant) => (
                    <li key={restaurant.id}>
                        <RestaurantCard
                            id={restaurant.id}
                            title={restaurant.title}
                            description={restaurant.description}
                            image={restaurant.image}
                            category={restaurant.category}
                            rating={restaurant.rating}
                            featured={restaurant.featured}
                        />
                    </li>
                ))}
            </List>
        </div>
    </Section>
)

export default RestaurantList