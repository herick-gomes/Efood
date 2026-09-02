import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.svg'

import {
    HeaderBar,
    Logo,
    HeroContent,
    Eyebrow,
    Title,
    Subtitle
} from './styles'

const Header = () => (
    <HeaderBar>
        <div className="container">
            <Logo>
                <Link to="/">
                    <img src={logo} alt="efood" />
                </Link>
            </Logo>

            <HeroContent>
                <Eyebrow>DELIVERY • RESTAURANTS • EXPERIENCES</Eyebrow>

                <Title>
                    Your next favorite meal
                    <br />
                    is just a few clicks away
                </Title>

                <Subtitle>
                    Discover great restaurants, explore new flavors and order from the
                    comfort of your home.
                </Subtitle>
            </HeroContent>
        </div>
    </HeaderBar>
)

export default Header