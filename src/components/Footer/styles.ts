import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const FooterContainer = styled.footer`
  padding: 64px 0 40px;

  border-top: 1px solid ${cores.borda};

  background-color: ${cores.salmaoClaro};
`

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
`

export const Logo = styled(Link)`
  display: block;

  width: 125px;

  transition: transform 0.2s ease;

  img {
    display: block;
    width: 100%;
  }

  &:hover {
    transform: scale(1.04);
  }
`

export const FooterDescription = styled.p`
  max-width: 560px;

  margin-top: 28px;

  color: ${cores.textoSecundario};

  font-size: 14px;
  line-height: 1.7;
`

export const Stack = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  gap: 8px;

  margin-top: 24px;
`

export const StackItem = styled.li`
  padding: 7px 12px;

  border: 1px solid rgba(230, 103, 103, 0.18);
  border-radius: 999px;

  background-color: rgba(255, 255, 255, 0.6);
  color: ${cores.salmaoEscuro};

  font-size: 11px;
  font-weight: 700;
`

export const Copyright = styled.p`
  margin-top: 34px;

  color: ${cores.textoSecundario};

  font-size: 11px;
  line-height: 1.5;
`