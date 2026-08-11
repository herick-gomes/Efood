import Dish from '../../models/Dish'
import DishCard from '../DishCard'

import { List, Section } from './styles'

type Props = {
    dishes: Dish[]
}

const DishList = ({ dishes }: Props) => (
    <Section>
        <div className="container">
            <List>
                {dishes.map((dish) => (
                    <li key={dish.id}>
                        <DishCard
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