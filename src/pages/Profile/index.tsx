import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import DishList from '../../components/DishList'
import Footer from '../../components/Footer'
import ProfileHeader from '../../components/ProfileHeader'
import RestaurantHero from '../../components/RestaurantHero'
import StatusState from '../../components/StatusState'

import Restaurant from '../../models/Restaurant'

import { translateRestaurant } from '../../utils/translateRestaurant'

const Profile = () => {
    const { id } = useParams()

    const [restaurant, setRestaurant] = useState<Restaurant>()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')

    const loadRestaurant = useCallback(
        async (signal?: AbortSignal) => {
            if (!id) {
                setError('Restaurant not found.')
                setIsLoading(false)

                return
            }

            try {
                setIsLoading(true)
                setError('')

                const response = await fetch(
                    `https://api-ebac.vercel.app/api/efood/restaurantes/${id}`,
                    { signal }
                )

                if (!response.ok) {
                    throw new Error('Unable to load restaurant')
                }

                const data: Restaurant = await response.json()

                setRestaurant(translateRestaurant(data))
            } catch (error) {
                if (error instanceof DOMException && error.name === 'AbortError') {
                    return
                }

                console.error('Error loading restaurant:', error)

                setError(
                    'We could not load this restaurant right now. Please try again.'
                )
            } finally {
                if (!signal?.aborted) {
                    setIsLoading(false)
                }
            }
        },
        [id]
    )

    useEffect(() => {
        const controller = new AbortController()

        loadRestaurant(controller.signal)

        return () => {
            controller.abort()
        }
    }, [loadRestaurant])

    return (
        <>
            <ProfileHeader />

            {isLoading && (
                <StatusState
                    loading
                    title="Loading restaurant"
                    description="We are preparing the menu for you."
                />
            )}

            {!isLoading && error && (
                <StatusState
                    title="Something went wrong"
                    description={error}
                    actionLabel="Try again"
                    onAction={() => loadRestaurant()}
                />
            )}

            {!isLoading && !error && restaurant && (
                <>
                    <RestaurantHero
                        category={restaurant.tipo}
                        name={restaurant.titulo}
                        image={restaurant.capa}
                    />

                    <DishList dishes={restaurant.cardapio} />
                </>
            )}

            <Footer />
        </>
    )
}

export default Profile