import Footer from '../../components/Footer'
import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'
import Restaurant from '../../models/Restaurant'

const restaurants: Restaurant[] = [
    {
        id: 1,
        title: 'Hioki Sushi',
        description:
            'Peça já o melhor da culinária japonesa no conforto da sua casa. Sushis frescos, sashimis selecionados e pratos preparados com ingredientes de qualidade.',
        image:
            'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80',
        category: 'Japonesa',
        rating: 4.9,
        featured: true
    },
    {
        id: 2,
        title: 'La Dolce Vita Trattoria',
        description:
            'A verdadeira culinária italiana chegou até você. Massas artesanais, molhos tradicionais e sabores que proporcionam uma experiência gastronômica especial.',
        image:
            'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80',
        category: 'Italiana',
        rating: 4.6
    },
    {
        id: 3,
        title: 'Sakura',
        description:
            'Uma seleção especial de pratos japoneses preparados com cuidado, tradição e ingredientes frescos para você aproveitar sem sair de casa.',
        image:
            'https://images.unsplash.com/photo-1579027989536-b7b1f875659b?auto=format&fit=crop&w=800&q=80',
        category: 'Japonesa',
        rating: 4.8
    },
    {
        id: 4,
        title: 'Bella Napoli',
        description:
            'Pizzas, massas e receitas italianas feitas com ingredientes selecionados e aquele sabor tradicional que transforma qualquer refeição.',
        image:
            'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=80',
        category: 'Italiana',
        rating: 4.7
    },
    {
        id: 5,
        title: 'Tokyo House',
        description:
            'Pratos japoneses clássicos e contemporâneos em um cardápio completo, preparado especialmente para os amantes da culinária oriental.',
        image:
            'https://images.unsplash.com/photo-1562158074-d49fbeffcc91?auto=format&fit=crop&w=800&q=80',
        category: 'Japonesa',
        rating: 4.9
    },
    {
        id: 6,
        title: 'Cantina Roma',
        description:
            'Receitas italianas tradicionais, massas frescas e sabores marcantes para proporcionar uma refeição completa no conforto da sua casa.',
        image:
            'https://images.unsplash.com/photo-1579684947550-22e945225d9a?auto=format&fit=crop&w=800&q=80',
        category: 'Italiana',
        rating: 4.5
    }
]

const Home = () => (
    <>
        <Header />
        <RestaurantList restaurants={restaurants} />
        <Footer />
    </>
)

export default Home