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
                <Eyebrow>DELIVERY • RESTAURANTES • EXPERIÊNCIAS</Eyebrow>

                <Title>
                    Seu próximo prato favorito
                    <br />
                    está a poucos cliques
                </Title>

                <Subtitle>
                    Conheça restaurantes, descubra novos sabores e faça seu pedido
                    sem sair de casa.
                </Subtitle>
            </HeroContent>
        </div>
    </HeaderBar>
)

export default Header