import { useState } from 'react'

import {
    AddButton,
    Card,
    CardContent,
    Description,
    DishImage,
    ImageContainer,
    Price,
    Title
} from './styles'

import ProductModal from '../ProductModal'

type Props = {
    id: number
    name: string
    description: string
    image: string
    price: number
    portion?: string
}

const DishCard = ({
    id,
    name,
    description,
    image,
    price,
    portion = ''
}: Props) => {
    const [modalOpen, setModalOpen] = useState(false)

    const formattedPrice = price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'BRL'
    })

    return (
        <>
            <Card>
                <ImageContainer>
                    <DishImage src={image} alt={name} />
                </ImageContainer>

                <CardContent>
                    <Title>{name}</Title>

                    <Description>{description}</Description>

                    <Price>{formattedPrice}</Price>

                    <AddButton type="button" onClick={() => setModalOpen(true)}>
                        View details
                    </AddButton>
                </CardContent>
            </Card>

            <ProductModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                id={id}
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