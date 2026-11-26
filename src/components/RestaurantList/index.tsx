import Restaurant from '../../models/Restaurant'
import RestaurantCard from '../RestaurantCard'

import {
    List,
    Section,
    SectionHeader,
    SectionTitle,
    SectionSubtitle
} from './styles'

type Props = {
    restaurants: Restaurant[]
}

const RestaurantList = ({ restaurants }: Props) => (
    <Section>
        <div className="container">
            <SectionHeader>
                <SectionTitle>Descubra restaurantes</SectionTitle>

                <SectionSubtitle>
                    Conheça novos sabores e escolha seu próximo prato favorito.
                </SectionSubtitle>
            </SectionHeader>

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