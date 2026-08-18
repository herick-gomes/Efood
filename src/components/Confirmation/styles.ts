import styled from 'styled-components'

import { cores } from '../../styles'

export const Title = styled.h2`
  margin: 24px 0 16px;
  color: ${cores.salmaoClaro};
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;
`

export const Description = styled.p`
  width: 344px;
  color: ${cores.salmaoClaro};
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;

  @media (max-width: 480px) {
    width: 100%;
  }
`

export const Button = styled.button`
  width: 344px;
  height: 24px;
  margin-top: 24px;
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