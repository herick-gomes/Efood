import styled from 'styled-components'

import { cores } from '../../styles'

export const CartOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1100;
  background-color: rgba(0, 0, 0, 0.8);
`

export const CartContainer = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  width: 360px;
  height: 100vh;
  padding: 8px;
  overflow-y: auto;
  background-color: ${cores.salmao};

  @media (max-width: 480px) {
    width: 100%;
  }
`

export const CartList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const CartItem = styled.li`
  position: relative;
  display: flex;
  width: 344px;
  height: 100px;
  padding: 8px;
  gap: 8px;
  background-color: ${cores.salmaoClaro};

  @media (max-width: 480px) {
    width: 100%;
  }
`

export const CartItemImage = styled.img`
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  object-fit: cover;
`

export const CartItemContent = styled.div`
  padding-top: 8px;
`

export const CartItemName = styled.h3`
  margin-bottom: 16px;
  color: ${cores.salmao};
  font-size: 18px;
  font-weight: 900;
  line-height: 18px;
`

export const CartItemPrice = styled.p`
  color: ${cores.salmao};
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
`

export const RemoveButton = styled.button`
  position: absolute;
  right: 8px;
  bottom: 8px;
  width: 16px;
  height: 16px;
  padding: 0;
  border: none;
  background-color: transparent;
`

export const RemoveIcon = styled.img`
  display: block;
  width: 16px;
  height: 16px;
`

export const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  color: ${cores.salmaoClaro};
  font-size: 14px;
  font-weight: 700;
  line-height: 14px;
`

export const TotalValue = styled.span`
  color: ${cores.salmaoClaro};
`

export const CartButton = styled.button`
  width: 344px;
  height: 24px;
  margin-top: 16px;
  padding: 0;
  border: none;
  background-color: ${cores.salmaoClaro};
  color: ${cores.salmao};
  font-size: 14px;
  font-weight: 700;

  @media (max-width: 480px) {
    width: 100%;
  }
`

export const EmptyMessage = styled.p`
  color: ${cores.salmaoClaro};
  font-size: 14px;
  font-weight: 700;
`