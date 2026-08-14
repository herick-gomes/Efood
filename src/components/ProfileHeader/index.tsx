import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import logo from '../../assets/images/logo.svg'
import { RootState } from '../../store'
import CartComponent from '../Cart'

import {
    Cart,
    HeaderBar,
    HeaderContent,
    Logo,
    Navigation
} from './styles'

const ProfileHeader = () => {
    const [cartOpen, setCartOpen] = useState(false)

    const items = useSelector((state: RootState) => state.cart.items)

    return (
        <>
            <HeaderBar>
                <HeaderContent className="container">
                    <Navigation to="/">Restaurantes</Navigation>

                    <Logo>
                        <Link to="/">
                            <img src={logo} alt="efood" />
                        </Link>
                    </Logo>

                    <Cart type="button" onClick={() => setCartOpen(true)}>
                        {items.length} produto(s) no carrinho
                    </Cart>
                </HeaderContent>
            </HeaderBar>

            <CartComponent
                isOpen={cartOpen}
                onClose={() => setCartOpen(false)}
            />
        </>
    )
}

export default ProfileHeader