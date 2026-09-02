import Dish from '../../models/Dish'
import DishCard from '../DishCard'

import {
    List,
    Section,
    SectionHeader,
    SectionSubtitle,
    SectionTitle
} from './styles'

type Props = {
    dishes: Dish[]
}

const DishList = ({ dishes }: Props) => (
    <Section>
        <div className="container">
            <SectionHeader>
                <SectionTitle>Explore the menu</SectionTitle>

                <SectionSubtitle>
                    Discover our selection of dishes and choose your next favorite.
                </SectionSubtitle>
            </SectionHeader>

            <List>
                {dishes.map((dish) => (
                    <li key={dish.id}>
                        <DishCard
                            id={dish.id}
                            name={dish.nome}
                            description={dish.descricao}
                            image={dish.foto}
                            price={dish.preco}
                            portion={dish.porcao}
                        />
                    </li>
                ))}
            </List>
        </div>
    </Section>
)

export default DishList