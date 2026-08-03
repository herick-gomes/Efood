import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const FooterContainer = styled.footer`
  padding: 40px 0;
  background-color: ${cores.salmaoClaro};
`

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Logo = styled(Link)`
  color: ${cores.salmao};
  font-size: 36px;
  font-weight: 900;
  line-height: 42px;
`

export const SocialLinks = styled.ul`
  display: flex;
  gap: 8px;
  margin-top: 32px;
`

export const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  min-height: 32px;
  padding: 4px;
  border: 1px solid ${cores.salmao};
  color: ${cores.salmao};
  font-size: 12px;
  font-weight: 700;
`

export const Copyright = styled.p`
  max-width: 480px;
  margin-top: 80px;
  color: ${cores.salmao};
  font-size: 10px;
  line-height: 12px;
  text-align: center;
`