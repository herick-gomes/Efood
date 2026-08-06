import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.svg'

import {
    Cart,
    HeaderBar,
    HeaderContent,
    Logo,
    Navigation
} from './styles'

const ProfileHeader = () => (
    <HeaderBar>
        <HeaderContent className="container">
            <Navigation to="/">Restaurantes</Navigation>

            <Logo>
                <Link to="/">
                    <img src={logo} alt="efood" />
                </Link>
            </Logo>

            <Cart href="#">0 produto(s) no carrinho</Cart>
        </HeaderContent>
    </HeaderBar>
)

export default ProfileHeader