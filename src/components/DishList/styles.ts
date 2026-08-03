import styled from 'styled-components'

export const Section = styled.main`
  padding: 56px 0 120px;

  @media (max-width: 768px) {
    padding: 40px 0 80px;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`