import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import DishList from '../../components/DishList'
import Footer from '../../components/Footer'
import ProfileHeader from '../../components/ProfileHeader'
import RestaurantHero from '../../components/RestaurantHero'
import StatusState from '../../components/StatusState'

import Restaurant from '../../models/Restaurant'

import { getRestaurant } from '../../services/efoodApi'

const Profile = () => {
    const { id } = useParams()

    const [restaurant, setRestaurant] = useState<Restaurant>()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')

    const loadRestaurant = useCallback(
        async (signal?: AbortSignal) => {
            if (!id) {
                setError('Restaurante não encontrado.')
                setIsLoading(false)

                return
            }

            try {
                setIsLoading(true)
                setError('')

                const data = await getRestaurant(id, signal)
                setRestaurant(data)
            } catch (error) {
                if (error instanceof DOMException && error.name === 'AbortError') {
                    return
                }

                console.error('Error loading restaurant:', error)

                setError(
                    'Não foi possível carregar este restaurante. Tente novamente.'
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
                    title="Carregando restaurante"
                    description="Estamos preparando o cardápio."
                />
            )}

            {!isLoading && error && (
                <StatusState
                    title="Algo deu errado"
                    description={error}
                    actionLabel="Tentar novamente"
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