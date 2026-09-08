import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const Card = styled(Link)`
  position: relative;

  display: block;

  width: 100%;
  height: 100%;

  overflow: hidden;

  background-color: ${cores.branca};

  border: 1px solid ${cores.borda};
  border-radius: 16px;

  box-shadow: 0 6px 24px rgba(70, 35, 25, 0.08);

  cursor: pointer;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  @media (hover: hover) {
    &:hover {
      transform: translateY(-5px);

      box-shadow: 0 14px 36px rgba(70, 35, 25, 0.13);
    }
  }

  &:focus-visible {
    outline: 3px solid rgba(230, 103, 103, 0.35);
    outline-offset: 3px;
  }
`

export const RestaurantImage = styled.img`
  display: block;

  width: 100%;
  height: 220px;

  object-fit: cover;

  @media (max-width: 480px) {
    height: 190px;
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;

  max-width: calc(100% - 32px);

  gap: 8px;

  @media (max-width: 480px) {
    top: 12px;
    right: 12px;

    max-width: calc(100% - 24px);

    gap: 6px;
  }
`

export const Tag = styled.span`
  display: inline-block;

  padding: 6px 10px;

  background-color: ${cores.salmao};
  color: ${cores.branca};

  border-radius: 999px;

  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);

  font-size: 11px;
  font-weight: 700;

  @media (max-width: 480px) {
    padding: 5px 9px;

    font-size: 10px;
  }
`

export const CardContent = styled.div`
  padding: 20px;

  @media (max-width: 480px) {
    padding: 18px;
  }
`

export const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  gap: 16px;
`

export const Title = styled.h3`
  min-width: 0;

  color: ${cores.texto};

  font-size: 20px;
  font-weight: 700;
  line-height: 1.3;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`

export const Rating = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;

  gap: 6px;

  color: ${cores.salmao};

  font-size: 16px;
  font-weight: 700;
`

export const Description = styled.p`
  min-height: 88px;

  margin: 14px 0 20px;

  color: ${cores.textoSecundario};

  font-size: 14px;
  line-height: 1.6;

  @media (max-width: 768px) {
    min-height: auto;
  }
`

export const ViewButton = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-height: 40px;

  padding: 0 18px;

  background-color: ${cores.salmao};
  color: ${cores.branca};

  border-radius: 10px;

  font-size: 14px;
  font-weight: 700;

  transition:
    background-color 0.2s ease,
    transform 0.2s ease;

  ${Card}:hover & {
    background-color: ${cores.salmaoEscuro};
  }

  @media (max-width: 480px) {
    width: 100%;
    min-height: 44px;
  }
`