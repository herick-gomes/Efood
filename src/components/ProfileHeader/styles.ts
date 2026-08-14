import styled from 'styled-components'
import { Link } from 'react-router-dom'

import fundoHeader from '../../assets/images/fundo-header.png'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  height: 186px;
  background-color: ${cores.salmaoClaro};
  background-image: url(${fundoHeader});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 768px) {
    height: auto;
    min-height: 220px;
    padding: 24px 0;
  }
`

export const HeaderContent = styled.div`
  position: relative;
  height: 100%;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }
`

export const Navigation = styled(Link)`
  position: absolute;
  top: 59px;
  left: 0;
  color: ${cores.salmao};
  font-size: 18px;
  font-weight: 900;
  line-height: 21px;
  text-align: center;

  @media (max-width: 768px) {
    position: static;
    order: 2;
  }
`

export const Logo = styled.div`
  position: absolute;
  top: 40px;
  left: 50%;
  width: 125px;
  height: 58px;
  transform: translateX(-50%);

  img {
    display: block;
    width: 125px;
    height: 58px;
  }

  @media (max-width: 768px) {
    position: static;
    order: 1;
    transform: none;
  }
`

export const Cart = styled.button`
  position: absolute;
  top: 59px;
  right: 0;
  padding: 0;
  border: none;
  background-color: transparent;
  color: ${cores.salmao};
  font-size: 18px;
  font-weight: 900;
  line-height: 21px;
  text-align: right;
  cursor: pointer;

  @media (max-width: 768px) {
    position: static;
    order: 3;
    text-align: center;
  }
`