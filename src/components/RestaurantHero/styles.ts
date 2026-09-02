import styled from 'styled-components'

import { cores } from '../../styles'

type HeroProps = {
  image: string
}

export const Hero = styled.section<HeroProps>`
  position: relative;

  height: 360px;

  background-image: url(${({ image }) => image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 260px;
  }
`

export const Overlay = styled.div`
  width: 100%;
  height: 100%;

  background:
    linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.16) 0%,
      rgba(0, 0, 0, 0.3) 45%,
      rgba(0, 0, 0, 0.82) 100%
    );

  .container {
    height: 100%;

    display: flex;
    align-items: flex-end;

    padding-bottom: 42px;
  }

  @media (max-width: 768px) {
    .container {
      padding-bottom: 32px;
    }
  }
`

export const RestaurantInfo = styled.div`
  max-width: 720px;
`

export const Category = styled.span`
  display: inline-block;

  margin-bottom: 12px;
  padding: 7px 12px;

  border: 1px solid rgba(255, 255, 255, 0.28);
  border-radius: 999px;

  background-color: rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(8px);

  color: ${cores.branca};

  font-size: 12px;
  font-weight: 700;

  text-transform: uppercase;
  letter-spacing: 1.2px;
`

export const RestaurantName = styled.h1`
  color: ${cores.branca};

  font-size: 42px;
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.7px;

  text-shadow: 0 3px 16px rgba(0, 0, 0, 0.28);

  @media (max-width: 768px) {
    font-size: 34px;
  }

  @media (max-width: 480px) {
    font-size: 29px;
  }
`