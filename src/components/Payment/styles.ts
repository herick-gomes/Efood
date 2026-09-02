import styled from 'styled-components'
import { Field, Form as FormikForm } from 'formik'

import { cores } from '../../styles'

type InputProps = {
  $hasError?: boolean
}

type ButtonProps = {
  $secondary?: boolean
}

export const Form = styled(FormikForm)`
  width: 100%;
`

export const Title = styled.h2`
  margin-top: 4px;

  color: ${cores.branca};

  font-size: 22px;
  font-weight: 800;
  letter-spacing: -0.3px;
`

export const Subtitle = styled.p`
  margin: 8px 0 22px;

  color: ${cores.salmaoClaro};

  font-size: 13px;
  line-height: 1.5;
`

export const PriceBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 24px;
  padding: 16px;

  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 12px;

  background-color: rgba(255, 255, 255, 0.08);
`

export const PriceLabel = styled.span`
  color: ${cores.salmaoClaro};

  font-size: 13px;
  font-weight: 700;
`

export const PriceValue = styled.strong`
  color: ${cores.branca};

  font-size: 20px;
  font-weight: 900;
`

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  margin-bottom: 16px;

  input {
    width: 100%;
    height: 46px;

    padding: 0 14px;

    border: 1px solid rgba(255, 255, 255, 0.24);
    border-radius: 10px;

    background-color: ${cores.branca};
    color: ${cores.texto};

    font-size: 14px;
    font-weight: 500;

    outline: none;

    transition:
      border-color 0.2s ease,
      box-shadow 0.2s ease;

    &::placeholder {
      color: #a29b98;
    }

    &:focus {
      border-color: ${cores.salmaoClaro};

      box-shadow: 0 0 0 3px rgba(255, 235, 217, 0.2);
    }
  }

  input.input-error {
    border-color: #8b1e1e;

    box-shadow: 0 0 0 3px rgba(139, 30, 30, 0.12);
  }
`

export const Label = styled.label`
  margin-bottom: 7px;

  color: ${cores.branca};

  font-size: 13px;
  font-weight: 700;
`

export const Input = styled(Field) <InputProps>`
  width: 100%;
  height: 46px;

  padding: 0 14px;

  border: 1px solid
    ${({ $hasError }) =>
    $hasError ? '#8b1e1e' : 'rgba(255, 255, 255, 0.24)'};

  border-radius: 10px;

  background-color: ${cores.branca};
  color: ${cores.texto};

  font-size: 14px;
  font-weight: 500;

  outline: none;

  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &::placeholder {
    color: #a29b98;
  }

  &:focus {
    border-color: ${cores.salmaoClaro};

    box-shadow: 0 0 0 3px rgba(255, 235, 217, 0.2);
  }
`

export const PaymentRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 100px;

  gap: 12px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`

export const ValidityRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 12px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`

export const ErrorMessage = styled.span`
  margin-top: 6px;

  color: #fff3f0;

  font-size: 11px;
  font-weight: 600;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;

  margin-top: 24px;
`

export const Button = styled.button<ButtonProps>`
  width: 100%;
  min-height: 46px;

  padding: 0 18px;

  border: ${({ $secondary }) =>
    $secondary ? '1px solid rgba(255, 255, 255, 0.32)' : 'none'};

  border-radius: 11px;

  background-color: ${({ $secondary }) =>
    $secondary ? 'transparent' : cores.branca};

  color: ${({ $secondary }) =>
    $secondary ? cores.branca : cores.salmaoEscuro};

  font-size: 14px;
  font-weight: 800;

  transition:
    background-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background-color: ${({ $secondary }) =>
    $secondary ? 'rgba(255, 255, 255, 0.1)' : cores.salmaoClaro};

    transform: translateY(-1px);
  }
`