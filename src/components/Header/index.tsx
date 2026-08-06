import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.svg'

import { HeaderBar, Logo, Title } from './styles'

const Header = () => (
    <HeaderBar>
        <div className="container">
            <Logo>
                <Link to="/">
                    <img src={logo} alt="efood" />
                </Link>
            </Logo>

            <Title>
                Viva experiências gastronômicas
                <br />
                no conforto da sua casa
            </Title>
        </div>
    </HeaderBar>
)

export default Header