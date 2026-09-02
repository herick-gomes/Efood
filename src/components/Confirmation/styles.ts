import styled from 'styled-components'

import { cores } from '../../styles'

export const SuccessCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 28px 0 12px;

  text-align: center;
`

export const ConfirmationIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 64px;
  height: 64px;

  margin-bottom: 22px;

  border-radius: 50%;

  background-color: ${cores.branca};
  color: ${cores.salmao};

  font-size: 32px;
  font-weight: 900;

  box-shadow: 0 8px 24px rgba(90, 30, 30, 0.16);
`

export const Title = styled.h2`
  color: ${cores.branca};

  font-size: 24px;
  font-weight: 900;
  letter-spacing: -0.3px;
`

export const Description = styled.p`
  max-width: 340px;

  margin-top: 14px;

  color: ${cores.salmaoClaro};

  font-size: 14px;
  line-height: 1.65;
`

export const OrderCode = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  margin: 24px 0 10px;
  padding: 18px;

  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 12px;

  background-color: rgba(255, 255, 255, 0.08);

  strong {
    margin-top: 6px;

    color: ${cores.branca};

    font-size: 20px;
    font-weight: 900;
    letter-spacing: 0.4px;
  }
`

export const OrderLabel = styled.span`
  color: ${cores.salmaoClaro};

  font-size: 12px;
  font-weight: 700;

  text-transform: uppercase;
  letter-spacing: 1px;
`

export const Button = styled.button`
  width: 100%;
  min-height: 48px;

  margin-top: 28px;
  padding: 0 20px;

  border: none;
  border-radius: 12px;

  background-color: ${cores.branca};
  color: ${cores.salmaoEscuro};

  font-size: 14px;
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