import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.salmaoClaro};
  padding: 40px 0;

  @media (max-width: 768px) {
    padding: 24px 0;
  }
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`

export const Navigation = styled(Link)`
  font-size: 18px;
  font-weight: 900;

  @media (max-width: 768px) {
    order: 2;
  }
`

export const Logo = styled(Link)`
  font-size: 36px;
  font-weight: 900;

  @media (max-width: 768px) {
    order: 1;
    font-size: 32px;
  }
`

export const Cart = styled.a`
  font-size: 18px;
  font-weight: 900;
  cursor: pointer;

  @media (max-width: 768px) {
    order: 3;
  }
`