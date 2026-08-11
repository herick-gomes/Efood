import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import DishList from '../../components/DishList'
import Footer from '../../components/Footer'
import ProfileHeader from '../../components/ProfileHeader'
import RestaurantHero from '../../components/RestaurantHero'

import Restaurant from '../../models/Restaurant'

const Profile = () => {
    const { id } = useParams()

    const [restaurant, setRestaurant] = useState<Restaurant>()

    useEffect(() => {
        fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
            .then((response) => response.json())
            .then((data) => setRestaurant(data))
    }, [id])

    if (!restaurant) {
        return <h3>Carregando...</h3>
    }

    return (
        <>
            <ProfileHeader />

            <RestaurantHero
                category={restaurant.tipo}
                name={restaurant.titulo}
                image={restaurant.capa}
            />

            <DishList dishes={restaurant.cardapio} />

            <Footer />
        </>
    )
}

export default Profile