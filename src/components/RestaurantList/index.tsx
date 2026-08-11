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
                            title={restaurant.titulo}
                            description={restaurant.descricao}
                            image={restaurant.capa}
                            category={restaurant.tipo}
                            rating={restaurant.avaliacao}
                            featured={restaurant.destacado}
                        />
                    </li>
                ))}
            </List>
        </div>
    </Section>
)

export default RestaurantList