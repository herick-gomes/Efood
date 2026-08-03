import { HeaderBar, Logo, Title } from './styles'

const Header = () => (
    <HeaderBar>
        <div className="container">
            <Logo to="/">efood</Logo>

            <Title>
                Viva experiências gastronômicas
                <br />
                no conforto da sua casa
            </Title>
        </div>
    </HeaderBar>
)

export default Header