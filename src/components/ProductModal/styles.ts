import styled from 'styled-components'

import { cores } from '../../styles'

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
`

export const ModalContainer = styled.div`
  position: relative;
  display: flex;
  width: 1024px;
  height: 344px;
  gap: 24px;
  padding: 32px;
  background-color: ${cores.salmao};
  color: ${cores.branca};

  @media (max-width: 1080px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 16px;
  height: 16px;
  padding: 0;
  border: none;
  background: transparent;
`

export const CloseIcon = styled.img`
  display: block;
  width: 16px;
  height: 16px;
`

export const ModalImage = styled.img`
  width: 280px;
  height: 280px;
  flex-shrink: 0;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
    height: 220px;
  }
`

export const ModalContent = styled.div`
  flex: 1;
`

export const ModalTitle = styled.h2`
  margin-bottom: 16px;
  color: ${cores.branca};
  font-size: 18px;
  font-weight: 900;
  line-height: 18px;
`

export const ModalDescription = styled.p`
  max-width: 656px;
  margin-bottom: 16px;
  color: ${cores.branca};
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
`

export const PurchaseButton = styled.button`
  width: 218px;
  height: 24px;
  padding: 0;
  border: none;
  background-color: ${cores.salmaoClaro};
  color: ${cores.salmao};
  font-size: 14px;
  font-weight: 700;
`