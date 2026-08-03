import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.salmaoClaro};
  padding: 40px 0;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 768px) {
    padding: 32px 0;
  }
`

export const Logo = styled(Link)`
  display: block;
  color: ${cores.salmao};
  font-size: 36px;
  font-weight: 900;
  line-height: 42px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`

export const Title = styled.h1`
  max-width: 540px;
  margin-top: 138px;
  color: ${cores.salmao};
  font-size: 36px;
  font-weight: 900;
  line-height: 42px;
  text-align: center;

  @media (max-width: 768px) {
    margin-top: 80px;
    font-size: 28px;
    line-height: 34px;
  }

  @media (max-width: 480px) {
    margin-top: 56px;
    font-size: 24px;
    line-height: 30px;
  }
`