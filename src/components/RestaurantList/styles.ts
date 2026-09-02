import styled from 'styled-components'

import { cores } from '../../styles'

export const Section = styled.main`
  padding: 88px 0 120px;

  @media (max-width: 768px) {
    padding: 64px 0 80px;
  }
`

export const SectionHeader = styled.div`
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 32px;
  }
`

export const SectionTitle = styled.h2`
  margin-bottom: 8px;

  color: ${cores.texto};
  font-size: 32px;
  font-weight: 800;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 27px;
  }
`

export const SectionSubtitle = styled.p`
  max-width: 560px;

  color: ${cores.textoSecundario};
  font-size: 16px;
  line-height: 1.6;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;

  li {
    display: flex;
  }

  li > article {
    width: 100%;
  }

  @media (max-width: 900px) {
    gap: 28px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`