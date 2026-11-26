import logo from '../../assets/images/logo.svg'

import {
    Copyright,
    FooterContainer,
    FooterContent,
    FooterDescription,
    Logo,
    Stack,
    StackItem
} from './styles'

const Footer = () => (
    <FooterContainer>
        <FooterContent className="container">
            <Logo to="/" aria-label="Voltar à página inicial do efood">
                <img src={logo} alt="efood" />
            </Logo>

            <FooterDescription>
                Uma experiência de delivery com React e TypeScript, com cardápios,
                carrinho e pedidos simulados integrados à nossa API Django.
            </FooterDescription>

            <Stack aria-label="Tecnologias utilizadas">
                <StackItem>React</StackItem>
                <StackItem>TypeScript</StackItem>
                <StackItem>Redux Toolkit</StackItem>
                <StackItem>Styled Components</StackItem>
            </Stack>

            <Copyright>
                © {new Date().getFullYear()} efood. Projeto de portfólio de Herick Gomes.
            </Copyright>
        </FooterContent>
    </FooterContainer>
)

export default Footer