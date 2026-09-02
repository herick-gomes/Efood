import styled from 'styled-components'

import fundoHeader from '../../assets/images/fundo-header.png'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  position: relative;
  min-height: 460px;
  overflow: hidden;
  padding: 36px 0 72px;

  background-color: ${cores.salmaoClaro};
  background-image:
    linear-gradient(
      180deg,
      rgba(255, 240, 230, 0.82) 0%,
      rgba(255, 248, 242, 0.94) 100%
    ),
    url(${fundoHeader});

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &::before {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    top: -140px;
    left: -100px;
    border-radius: 50%;
    background: rgba(230, 103, 103, 0.08);
  }

  &::after {
    content: '';
    position: absolute;
    width: 260px;
    height: 260px;
    right: -100px;
    bottom: -140px;
    border-radius: 50%;
    background: rgba(230, 103, 103, 0.1);
  }

  .container {
    position: relative;
    z-index: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 768px) {
    min-height: 410px;
    padding: 28px 0 56px;
  }
`

export const Logo = styled.div`
  width: 125px;

  img {
    display: block;
    width: 100%;
  }

  a {
    display: block;
    transition: transform 0.2s ease;
  }

  a:hover {
    transform: scale(1.04);
  }
`

export const HeroContent = styled.div`
  max-width: 760px;
  margin-top: 90px;
  text-align: center;

  @media (max-width: 768px) {
    margin-top: 64px;
  }
`

export const Eyebrow = styled.span`
  display: inline-block;
  margin-bottom: 18px;
  padding: 8px 14px;

  color: ${cores.salmaoEscuro};
  background-color: rgba(255, 255, 255, 0.68);

  border: 1px solid rgba(230, 103, 103, 0.18);
  border-radius: 999px;

  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.4px;
`

export const Title = styled.h1`
  color: ${cores.texto};
  font-size: 44px;
  font-weight: 900;
  line-height: 1.12;
  letter-spacing: -1px;

  @media (max-width: 768px) {
    font-size: 34px;
  }

  @media (max-width: 480px) {
    font-size: 29px;

    br {
      display: none;
    }
  }
`

export const Subtitle = styled.p`
  max-width: 590px;
  margin: 20px auto 0;

  color: ${cores.textoSecundario};
  font-size: 17px;
  line-height: 1.6;

  @media (max-width: 480px) {
    font-size: 15px;
  }
`