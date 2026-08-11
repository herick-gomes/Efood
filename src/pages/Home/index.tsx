import { useEffect, useState } from 'react'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'
import Restaurant from '../../models/Restaurant'

const Home = () => {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([])

    useEffect(() => {
        fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
            .then((response) => response.json())
            .then((data) => setRestaurants(data))
    }, [])

    return (
        <>
            <Header />
            <RestaurantList restaurants={restaurants} />
            <Footer />
        </>
    )
}

export default Home