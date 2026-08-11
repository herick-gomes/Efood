import { useState } from 'react'

import {
    AddButton,
    Card,
    Description,
    DishImage,
    Price,
    Title
} from './styles'

import ProductModal from '../ProductModal'

type Props = {
    name: string
    description: string
    image: string
    price: number
    portion?: string
}

const DishCard = ({
    name,
    description,
    image,
    price,
    portion = ''
}: Props) => {
    const [modalOpen, setModalOpen] = useState(false)

    return (
        <>
            <Card>
                <DishImage src={image} alt={name} />

                <Title>{name}</Title>

                <Description>{description}</Description>

                <Price>
                    {price.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    })}
                </Price>

                <AddButton type="button" onClick={() => setModalOpen(true)}>
                    Adicionar ao carrinho
                </AddButton>
            </Card>

            <ProductModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                name={name}
                description={description}
                image={image}
                price={price}
                portion={portion}
            />
        </>
    )
}

export default DishCard