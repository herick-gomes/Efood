import DishList from '../../components/DishList'
import Footer from '../../components/Footer'
import ProfileHeader from '../../components/ProfileHeader'
import RestaurantHero from '../../components/RestaurantHero'
import Dish from '../../models/Dish'

const dishes: Dish[] = [
    {
        id: 1,
        name: 'Pizza Marguerita',
        description:
            'Pizza clássica preparada com molho de tomate, queijo muçarela, manjericão fresco e azeite.',
        image:
            'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80',
        price: 48.9
    },
    {
        id: 2,
        name: 'Pizza Pepperoni',
        description:
            'Massa artesanal, molho de tomate, muçarela e generosas fatias de pepperoni.',
        image:
            'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80',
        price: 52.9
    },
    {
        id: 3,
        name: 'Lasanha Bolonhesa',
        description:
            'Camadas de massa, molho bolonhesa, queijo e molho branco gratinados no forno.',
        image:
            'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=800&q=80',
        price: 44.9
    },
    {
        id: 4,
        name: 'Fettuccine Alfredo',
        description:
            'Massa fettuccine servida com molho cremoso à base de queijo e manteiga.',
        image:
            'https://images.unsplash.com/photo-1556761223-4c4282c73f77?auto=format&fit=crop&w=800&q=80',
        price: 42.9
    },
    {
        id: 5,
        name: 'Ravioli',
        description:
            'Massa recheada acompanhada de molho artesanal e queijo parmesão.',
        image:
            'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80',
        price: 46.9
    },
    {
        id: 6,
        name: 'Tiramisù',
        description:
            'Sobremesa italiana feita com café, creme de mascarpone e cacau.',
        image:
            'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80',
        price: 24.9
    }
]

const Profile = () => (
    <>
        <ProfileHeader />

        <RestaurantHero
            category="Italiana"
            name="La Dolce Vita Trattoria"
            image="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1600&q=80"
        />

        <DishList dishes={dishes} />
        <Footer />
    </>
)

export default Profile