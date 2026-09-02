import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const Card = styled.article`
  position: relative;
  overflow: hidden;
  background-color: ${cores.branca};
  border: 1px solid ${cores.borda};
  border-radius: 16px;
  box-shadow: 0 6px 24px rgba(70, 35, 25, 0.08);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 14px 36px rgba(70, 35, 25, 0.13);
  }
`

export const RestaurantImage = styled.img`
  display: block;
  width: 100%;
  height: 220px;
  object-fit: cover;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const Tag = styled.span`
  display: inline-block;
  padding: 6px 10px;
  background-color: ${cores.salmao};
  color: ${cores.branca};
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);
`

export const CardContent = styled.div`
  padding: 20px;
`

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`

export const Title = styled.h3`
  color: ${cores.texto};
  font-size: 20px;
  font-weight: 700;
`

export const Rating = styled.div`
  display: flex;
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
`

export const ViewButton = styled(Link)`
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

  &:hover {
    background-color: ${cores.salmaoEscuro};
    transform: translateY(-1px);
  }
`