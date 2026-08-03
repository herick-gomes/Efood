import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const Card = styled.article`
  position: relative;
  background-color: ${cores.branca};
  border: 1px solid ${cores.salmao};
`

export const RestaurantImage = styled.img`
  display: block;
  width: 100%;
  height: 217px;
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
  padding: 6px 8px;
  background-color: ${cores.salmao};
  color: ${cores.branca};
  font-size: 12px;
  font-weight: 700;
`

export const CardContent = styled.div`
  padding: 8px;
`

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
`

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  font-weight: 700;
`

export const Description = styled.p`
  min-height: 88px;
  margin: 16px 0;
  color: ${cores.salmao};
  font-size: 14px;
  line-height: 22px;
`

export const ViewButton = styled(Link)`
  display: inline-block;
  padding: 4px 6px;
  background-color: ${cores.salmao};
  color: ${cores.branca};
  font-size: 14px;
  font-weight: 700;
`