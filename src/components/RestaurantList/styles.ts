import styled from 'styled-components'

import { cores } from '../../styles'

export const Section = styled.main`
  padding: 88px 0 120px;

  @media (max-width: 768px) {
    padding: 64px 0 80px;
  }

  @media (max-width: 480px) {
    padding: 48px 0 64px;
  }
`

export const SectionHeader = styled.div`
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 32px;
  }

  @media (max-width: 480px) {
    margin-bottom: 26px;
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

  @media (max-width: 480px) {
    font-size: 24px;
  }
`

export const SectionSubtitle = styled.p`
  max-width: 560px;

  color: ${cores.textoSecundario};

  font-size: 16px;
  line-height: 1.6;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 40px;

  li {
    display: flex;
  }

  li > a {
    width: 100%;
  }

  @media (max-width: 900px) {
    gap: 28px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 480px) {
    gap: 22px;
  }
`