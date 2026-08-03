import styled from 'styled-components'

import { cores } from '../../styles'

export const Card = styled.article`
  height: 100%;
  padding: 8px;
  background-color: ${cores.salmao};
  color: ${cores.salmaoClaro};
`

export const DishImage = styled.img`
  display: block;
  width: 100%;
  height: 167px;
  object-fit: cover;
`

export const Title = styled.h3`
  margin-top: 8px;
  font-size: 16px;
  font-weight: 900;
`

export const Description = styled.p`
  margin-top: 8px;
  font-size: 14px;
  line-height: 22px;
`

export const Price = styled.p`
  margin-top: 8px;
  font-size: 14px;
  font-weight: 700;
`

export const AddButton = styled.button`
  width: 100%;
  margin-top: 8px;
  padding: 4px;
  border: none;
  background-color: ${cores.salmaoClaro};
  color: ${cores.salmao};
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`