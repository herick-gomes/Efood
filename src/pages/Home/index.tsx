import { useCallback, useEffect, useState } from 'react'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'
import StatusState from '../../components/StatusState'

import Restaurant from '../../models/Restaurant'

import { getRestaurants } from '../../services/efoodApi'

const Home = () => {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')

    const loadRestaurants = useCallback(async (signal?: AbortSignal) => {
        try {
            setIsLoading(true)
            setError('')

            const data = await getRestaurants(signal)
            setRestaurants(data)
        } catch (error) {
            if (error instanceof DOMException && error.name === 'AbortError') {
                return
            }

            console.error('Error loading restaurants:', error)

            setError(
                'We could not load the restaurants right now. Please try again.'
            )
        } finally {
            if (!signal?.aborted) {
                setIsLoading(false)
            }
        }
    }, [])

    useEffect(() => {
        const controller = new AbortController()

        loadRestaurants(controller.signal)

        return () => {
            controller.abort()
        }
    }, [loadRestaurants])

    return (
        <>
            <Header />

            {isLoading && (
                <StatusState
                    loading
                    title="Loading restaurants"
                    description="We are preparing the best restaurant options for you."
                />
            )}

            {!isLoading && error && (
                <StatusState
                    title="Something went wrong"
                    description={error}
                    actionLabel="Try again"
                    onAction={() => loadRestaurants()}
                />
            )}

            {!isLoading && !error && (
                <RestaurantList restaurants={restaurants} />
            )}

            <Footer />
        </>
    )
}

export default Home