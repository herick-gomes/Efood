import styled from 'styled-components'

import { cores } from '../../styles'

export const CartOverlay = styled.div`
  position: fixed;
  inset: 0;

  z-index: 1100;

  background-color: rgba(20, 15, 13, 0.62);

  backdrop-filter: blur(4px);
`

export const CartContainer = styled.aside`
  position: fixed;
  top: 0;
  right: 0;

  width: min(420px, 100%);

  height: 100vh;
  height: 100dvh;

  padding: 28px;

  overflow-y: auto;

  background-color: ${cores.salmao};

  box-shadow: -12px 0 40px rgba(0, 0, 0, 0.2);

  @media (max-width: 600px) {
    padding: 24px 20px;
  }

  @media (max-width: 480px) {
    padding: 20px 16px;
  }
`

export const CartHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  gap: 16px;

  margin-bottom: 28px;
`

export const CartTitle = styled.h2`
  color: ${cores.branca};

  font-size: 26px;
  font-weight: 900;
  letter-spacing: -0.4px;

  @media (max-width: 480px) {
    font-size: 23px;
  }
`

export const CartSubtitle = styled.p`
  margin-top: 5px;

  color: ${cores.salmaoClaro};

  font-size: 13px;
`

export const CloseButton = styled.button`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  width: 38px;
  height: 38px;

  padding: 0;

  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;

  background-color: rgba(255, 255, 255, 0.1);
  color: ${cores.branca};

  font-size: 26px;
  font-weight: 300;
  line-height: 1;

  transition:
    background-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);

    transform: scale(1.05);
  }
`

export const CartList = styled.ul`
  display: flex;
  flex-direction: column;

  gap: 12px;
`

export const CartItem = styled.li`
  position: relative;

  display: flex;

  min-height: 112px;

  padding: 12px;

  gap: 14px;

  background-color: ${cores.branca};

  border-radius: 14px;

  box-shadow: 0 5px 18px rgba(80, 30, 30, 0.1);

  @media (max-width: 380px) {
    min-height: 96px;

    gap: 10px;
  }
`

export const CartItemImage = styled.img`
  width: 88px;
  height: 88px;

  flex-shrink: 0;

  border-radius: 10px;

  object-fit: cover;

  @media (max-width: 380px) {
    width: 72px;
    height: 72px;
  }
`

export const CartItemContent = styled.div`
  min-width: 0;

  padding: 6px 30px 6px 0;
`

export const CartItemName = styled.h3`
  margin-bottom: 10px;

  overflow: hidden;

  color: ${cores.texto};

  font-size: 16px;
  font-weight: 800;
  line-height: 1.3;

  text-overflow: ellipsis;

  @media (max-width: 380px) {
    font-size: 14px;
  }
`

export const CartItemPrice = styled.p`
  color: ${cores.salmaoEscuro};

  font-size: 15px;
  font-weight: 800;

  @media (max-width: 380px) {
    font-size: 14px;
  }
`

export const RemoveButton = styled.button`
  position: absolute;
  right: 12px;
  bottom: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 30px;
  height: 30px;

  padding: 0;

  border: none;
  border-radius: 8px;

  background-color: ${cores.salmaoClaro};

  transition:
    background-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background-color: #f7d7cd;

    transform: scale(1.05);
  }

  @media (max-width: 380px) {
    right: 10px;
    bottom: 10px;

    width: 28px;
    height: 28px;
  }
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

  gap: 16px;

  margin-top: 32px;
  padding-top: 22px;

  border-top: 1px solid rgba(255, 255, 255, 0.2);
`

export const TotalLabel = styled.span`
  color: ${cores.salmaoClaro};

  font-size: 14px;
  font-weight: 700;
`

export const TotalValue = styled.span`
  color: ${cores.branca};

  font-size: 22px;
  font-weight: 900;

  white-space: nowrap;

  @media (max-width: 380px) {
    font-size: 19px;
  }
`

export const CartButton = styled.button`
  width: 100%;
  min-height: 48px;

  margin-top: 18px;
  padding: 0 20px;

  border: none;
  border-radius: 12px;

  background-color: ${cores.branca};
  color: ${cores.salmaoEscuro};

  font-size: 15px;
  font-weight: 800;

  transition:
    background-color 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    background-color: ${cores.salmaoClaro};

    transform: translateY(-2px);

    box-shadow: 0 8px 20px rgba(90, 30, 30, 0.18);
  }

  &:active {
    transform: translateY(0);
  }
`

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 80px 24px;

  text-align: center;

  @media (max-width: 480px) {
    padding: 64px 16px;
  }
`

export const EmptyIcon = styled.span`
  margin-bottom: 18px;

  font-size: 42px;
`

export const EmptyMessage = styled.p`
  color: ${cores.branca};

  font-size: 20px;
  font-weight: 800;
`

export const EmptyDescription = styled.p`
  max-width: 280px;

  margin-top: 10px;

  color: ${cores.salmaoClaro};

  font-size: 14px;
  line-height: 1.6;
`

export const ProcessingMessage = styled.p`
  margin-top: 20px;

  color: ${cores.branca};

  font-size: 14px;
  font-weight: 700;

  text-align: center;
`