import styled from 'styled-components'

import { cores } from '../../styles'

export const Card = styled.article`
  display: flex;
  flex-direction: column;

  height: 100%;

  overflow: hidden;

  background-color: ${cores.branca};

  border: 1px solid ${cores.borda};
  border-radius: 16px;

  box-shadow: 0 6px 24px rgba(70, 35, 25, 0.07);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-5px);

    box-shadow: 0 14px 36px rgba(70, 35, 25, 0.12);
  }
`

export const ImageContainer = styled.div`
  overflow: hidden;
`

export const DishImage = styled.img`
  display: block;

  width: 100%;
  height: 205px;

  object-fit: cover;

  transition: transform 0.4s ease;

  ${Card}:hover & {
    transform: scale(1.04);
  }
`

export const CardContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  padding: 20px;
`

export const Title = styled.h3`
  color: ${cores.texto};

  font-size: 19px;
  font-weight: 800;
  line-height: 1.3;
`

export const Description = styled.p`
  display: -webkit-box;

  margin-top: 10px;

  overflow: hidden;

  color: ${cores.textoSecundario};

  font-size: 14px;
  line-height: 1.6;

  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`

export const Price = styled.p`
  margin-top: auto;
  padding-top: 20px;

  color: ${cores.salmaoEscuro};

  font-size: 18px;
  font-weight: 800;
`

export const AddButton = styled.button`
  width: 100%;
  min-height: 42px;

  margin-top: 14px;

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
`