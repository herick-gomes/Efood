import styled from 'styled-components'
import { Link } from 'react-router-dom'

import fundoHeader from '../../assets/images/fundo-header.png'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  min-height: 140px;
  background-color: ${cores.salmaoClaro};

  background-image:
    linear-gradient(
      180deg,
      rgba(255, 240, 230, 0.86),
      rgba(255, 248, 242, 0.96)
    ),
    url(${fundoHeader});

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  border-bottom: 1px solid rgba(230, 103, 103, 0.12);

  @media (max-width: 768px) {
    padding: 24px 0;
  }
`

export const HeaderContent = styled.div`
  position: relative;
  min-height: 140px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    min-height: auto;

    flex-direction: column;
    justify-content: center;

    gap: 20px;
  }
`

export const Navigation = styled(Link)`
  display: inline-flex;
  align-items: center;

  color: ${cores.salmaoEscuro};

  font-size: 15px;
  font-weight: 700;

  transition:
    color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    color: ${cores.salmao};
    transform: translateX(-3px);
  }

  @media (max-width: 768px) {
    order: 2;
  }
`

export const Logo = styled.div`
  position: absolute;
  left: 50%;

  width: 125px;

  transform: translateX(-50%);

  a {
    display: block;

    transition: transform 0.2s ease;
  }

  a:hover {
    transform: scale(1.04);
  }

  img {
    display: block;
    width: 100%;
  }

  @media (max-width: 768px) {
    position: static;

    order: 1;

    transform: none;
  }
`

export const Cart = styled.button`
  min-height: 42px;

  padding: 0 18px;

  border: 1px solid rgba(230, 103, 103, 0.28);
  border-radius: 10px;

  background-color: rgba(255, 255, 255, 0.7);

  color: ${cores.salmaoEscuro};

  font-size: 14px;
  font-weight: 700;

  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background-color: ${cores.salmao};
    border-color: ${cores.salmao};
    color: ${cores.branca};

    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    order: 3;
  }
`