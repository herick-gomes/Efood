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
    <FooterContent className= "container" >
    <Logo to="/" aria - label="Go to efood home" >
        <img src={ logo } alt = "efood" />
            </Logo>

            <FooterDescription>
        A modern food delivery experience built with React and TypeScript,
    featuring restaurant discovery, persistent cart management and a
        complete checkout flow.
      < /FooterDescription>

    < Stack aria - label="Technologies used" >
        <StackItem>React < /StackItem>
        < StackItem > TypeScript < /StackItem>
        < StackItem > Redux Toolkit < /StackItem>
            < StackItem > Styled Components < /StackItem>
                < /Stack>

                <Copyright>
        © { new Date().getFullYear() } efood.Portfolio project by Herick Gomes.
      < /Copyright>
    < /FooterContent>
    < /FooterContainer>
)

export default Footer