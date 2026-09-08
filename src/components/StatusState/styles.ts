import styled, { keyframes } from 'styled-components'

import { cores } from '../../styles'

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`

export const StateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 320px;

  padding: 72px 24px;

  text-align: center;

  @media (max-width: 480px) {
    min-height: 260px;

    padding: 56px 20px;
  }
`

export const Spinner = styled.div`
  width: 42px;
  height: 42px;

  margin-bottom: 24px;

  border: 4px solid ${cores.salmaoClaro};
  border-top-color: ${cores.salmao};

  border-radius: 50%;

  animation: ${spin} 0.8s linear infinite;
`

export const Title = styled.h2`
  color: ${cores.texto};

  font-size: 24px;
  font-weight: 800;

  @media (max-width: 480px) {
    font-size: 21px;
  }
`

export const Description = styled.p`
  max-width: 460px;

  margin-top: 10px;

  color: ${cores.textoSecundario};

  font-size: 15px;
  line-height: 1.6;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`

export const ActionButton = styled.button`
  min-height: 44px;

  margin-top: 24px;
  padding: 0 20px;

  border: none;
  border-radius: 10px;

  background-color: ${cores.salmao};
  color: ${cores.branca};

  font-size: 14px;
  font-weight: 700;

  transition:
    background-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background-color: ${cores.salmaoEscuro};

    transform: translateY(-1px);
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 280px;

    min-height: 46px;
  }
`