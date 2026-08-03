import { HeaderBar, HeaderContent, Logo, Navigation, Cart } from './styles'

const ProfileHeader = () => (
    <HeaderBar>
        <HeaderContent className="container">
            <Navigation to="/">Restaurantes</Navigation>

            <Logo to="/">efood</Logo>

            <Cart href="#">0 produto(s) no carrinho</Cart>
        </HeaderContent>
    </HeaderBar>
)

export default ProfileHeader