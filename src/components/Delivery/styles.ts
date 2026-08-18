import styled from 'styled-components'
import { Field, Form as FormikForm } from 'formik'

import { cores } from '../../styles'

type InputProps = {
    $small?: boolean
    $hasError?: boolean
}

export const Form = styled(FormikForm)`
  width: 100%;
`

export const Title = styled.h2`
  margin: 24px 0 16px;
  color: ${cores.salmaoClaro};
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;
`

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`

export const Label = styled.label`
  margin-bottom: 8px;
  color: ${cores.salmaoClaro};
  font-size: 14px;
  font-weight: 700;
  line-height: 14px;
`

export const Input = styled(Field) <InputProps>`
  width: ${({ $small }) => ($small ? '155px' : '344px')};
  height: 32px;
  padding: 0 8px;
  border: 2px solid
    ${({ $hasError }) => ($hasError ? '#8b0000' : cores.salmaoClaro)};
  background-color: ${cores.salmaoClaro};
  color: #4b4b4b;
  font-size: 14px;
  font-weight: 700;
  outline: none;

  @media (max-width: 480px) {
    width: 100%;
  }
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 34px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0;
  }
`

export const ErrorMessage = styled.span`
  margin-top: 4px;
  color: ${cores.branca};
  font-size: 10px;
  font-weight: 700;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
`

export const Button = styled.button`
  width: 344px;
  height: 24px;
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