import styled from 'styled-components'

import fundoHeader from '../../assets/images/fundo-header.png'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  min-height: 384px;
  padding: 40px 0;
  background-color: ${cores.salmaoClaro};
  background-image: url(${fundoHeader});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 768px) {
    min-height: 320px;
    padding: 32px 0;
  }
`

export const Logo = styled.div`
  width: 125px;
  height: 58px;

  img {
    display: block;
    width: 125px;
    height: 58px;
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