import styled from 'styled-components'

import { cores } from '../../styles'

type HeroProps = {
    image: string
}

export const Hero = styled.section<HeroProps>`
  height: 280px;
  background-image: url(${({ image }) => image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 768px) {
    height: 240px;
  }
`

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 24px;
    padding-bottom: 32px;
  }
`

export const Category = styled.span`
  color: ${cores.branca};
  font-size: 32px;
  font-weight: 100;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`

export const RestaurantName = styled.h1`
  color: ${cores.branca};
  font-size: 32px;
  font-weight: 900;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`