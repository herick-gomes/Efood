import {
    Copyright,
    FooterContainer,
    FooterContent,
    Logo,
    SocialLink,
    SocialLinks
} from './styles'

const Footer = () => (
    <FooterContainer>
        <FooterContent className="container">
            <Logo to="/">efood</Logo>

            <SocialLinks>
                <li>
                    <SocialLink
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Instagram"
                    >
                        Instagram
                    </SocialLink>
                </li>

                <li>
                    <SocialLink
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Facebook"
                    >
                        Facebook
                    </SocialLink>
                </li>

                <li>
                    <SocialLink
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Twitter"
                    >
                        Twitter
                    </SocialLink>
                </li>
            </SocialLinks>

            <Copyright>
                A efood é uma plataforma para divulgação de estabelecimentos. A
                responsabilidade pela entrega e pela qualidade dos produtos é
                exclusivamente do estabelecimento contratado.
            </Copyright>
        </FooterContent>
    </FooterContainer>
)

export default Footer