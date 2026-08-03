import styled from 'styled-components'

export const Section = styled.main`
  padding: 80px 0 120px;

  @media (max-width: 768px) {
    padding: 56px 0 80px;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px 80px;

  @media (max-width: 900px) {
    gap: 32px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`