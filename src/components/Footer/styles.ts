import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const FooterContainer = styled.footer`
  height: 298px;
  padding-top: 40px;
  background-color: ${cores.salmaoClaro};
`

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Logo = styled(Link)`
  display: block;
  width: 125px;
  height: 58px;

  img {
    display: block;
    width: 125px;
    height: 58px;
  }
`

export const SocialLinks = styled.ul`
  display: flex;
  gap: 8px;
  width: 88px;
  height: 24px;
  margin-top: 32px;
`

export const SocialLink = styled.a`
  display: block;
  width: 24px;
  height: 24px;
`

export const SocialIcon = styled.img`
  display: block;
  width: 24px;
  height: 24px;
`

export const Copyright = styled.p`
  width: 480px;
  margin-top: 80px;
  color: ${cores.salmao};
  font-size: 10px;
  font-weight: 400;
  line-height: 10px;
  text-align: center;

  @media (max-width: 540px) {
    width: 90%;
  }
`