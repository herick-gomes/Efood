import styled from 'styled-components'

import { cores } from '../../styles'

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 24px;

  background-color: rgba(20, 15, 13, 0.72);
  backdrop-filter: blur(6px);

  @media (max-width: 600px) {
    align-items: flex-start;
    overflow-y: auto;

    padding: 20px 16px;
  }
`

export const ModalContainer = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: minmax(300px, 0.9fr) minmax(360px, 1.1fr);

  width: 100%;
  max-width: 920px;

  overflow: hidden;

  background-color: ${cores.branca};

  border-radius: 20px;

  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.28);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    max-width: 560px;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 38px;
  height: 38px;

  padding: 0;

  border: none;
  border-radius: 50%;

  background-color: rgba(255, 255, 255, 0.92);
  color: ${cores.texto};

  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);

  font-size: 26px;
  font-weight: 300;
  line-height: 1;

  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background-color: ${cores.salmao};
    color: ${cores.branca};

    transform: scale(1.05);
  }
`

export const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  min-height: 440px;

  object-fit: cover;

  @media (max-width: 768px) {
    height: 280px;
    min-height: 0;
  }

  @media (max-width: 480px) {
    height: 230px;
  }
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 48px;

  @media (max-width: 768px) {
    padding: 32px;
  }

  @media (max-width: 480px) {
    padding: 26px 22px;
  }
`

export const ModalTitle = styled.h2`
  margin-bottom: 16px;

  color: ${cores.texto};

  font-size: 30px;
  font-weight: 900;
  line-height: 1.15;
  letter-spacing: -0.5px;

  @media (max-width: 480px) {
    font-size: 25px;
  }
`

export const ModalDescription = styled.p`
  margin-bottom: 20px;

  color: ${cores.textoSecundario};

  font-size: 15px;
  line-height: 1.7;
`

export const Portion = styled.span`
  display: inline-flex;
  align-self: flex-start;

  margin-bottom: 22px;
  padding: 7px 12px;

  border-radius: 999px;

  background-color: ${cores.salmaoClaro};
  color: ${cores.salmaoEscuro};

  font-size: 12px;
  font-weight: 700;
`

export const Price = styled.p`
  margin-top: auto;

  color: ${cores.texto};

  font-size: 24px;
  font-weight: 900;
`

export const PurchaseButton = styled.button`
  width: 100%;
  min-height: 48px;

  margin-top: 18px;
  padding: 0 24px;

  border: none;
  border-radius: 12px;

  background-color: ${cores.salmao};
  color: ${cores.branca};

  font-size: 15px;
  font-weight: 700;

  transition:
    background-color 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    background-color: ${cores.salmaoEscuro};

    transform: translateY(-2px);

    box-shadow: 0 8px 20px rgba(200, 79, 79, 0.24);
  }

  &:active {
    transform: translateY(0);
  }
`