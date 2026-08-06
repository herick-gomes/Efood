import logo from '../../assets/images/logo.svg'
import facebook from '../../assets/images/facebook.svg'
import instagram from '../../assets/images/instagram.svg'
import twitter from '../../assets/images/twitter.svg'

import {
    Copyright,
    FooterContainer,
    FooterContent,
    Logo,
    SocialIcon,
    SocialLink,
    SocialLinks
} from './styles'

const Footer = () => (
    <FooterContainer>
        <FooterContent className="container">
            <Logo to="/">
                <img src={logo} alt="efood" />
            </Logo>

            <SocialLinks>
                <li>
                    <SocialLink
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Instagram"
                    >
                        <SocialIcon src={instagram} alt="" />
                    </SocialLink>
                </li>

                <li>
                    <SocialLink
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Facebook"
                    >
                        <SocialIcon src={facebook} alt="" />
                    </SocialLink>
                </li>

                <li>
                    <SocialLink
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Twitter"
                    >
                        <SocialIcon src={twitter} alt="" />
                    </SocialLink>
                </li>
            </SocialLinks>

            <Copyright>
                A efood é uma plataforma para divulgação de estabelecimentos. A
                responsabilidade pela entrega e qualidade dos produtos é toda do
                estabelecimento contratado.
            </Copyright>
        </FooterContent>
    </FooterContainer>
)

export default Footer