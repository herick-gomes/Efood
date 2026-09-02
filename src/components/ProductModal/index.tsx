import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { add } from '../../store/reducers/cart'

import {
    CloseButton,
    ModalContainer,
    ModalContent,
    ModalDescription,
    ModalImage,
    ModalOverlay,
    ModalTitle,
    Portion,
    Price,
    PurchaseButton
} from './styles'

type Props = {
    isOpen: boolean
    onClose: () => void
    id: number
    name: string
    description: string
    image: string
    price: number
    portion: string
}

const ProductModal = ({
    isOpen,
    onClose,
    id,
    name,
    description,
    image,
    price,
    portion
}: Props) => {
    const dispatch = useDispatch()

    useEffect(() => {
        if (!isOpen) {
            return
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose()
            }
        }

        const previousOverflow = document.body.style.overflow

        document.body.style.overflow = 'hidden'
        window.addEventListener('keydown', handleKeyDown)

        return () => {
            document.body.style.overflow = previousOverflow
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [isOpen, onClose])

    if (!isOpen) {
        return null
    }

    const formattedPrice = price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'BRL'
    })

    const addToCart = () => {
        dispatch(
            add({
                id,
                nome: name,
                descricao: description,
                foto: image,
                preco: price,
                porcao: portion
            })
        )

        onClose()
    }

    return (
        <ModalOverlay onClick={onClose}>
            <ModalContainer
                role="dialog"
                aria-modal="true"
                aria-labelledby={`dish-${id}-title`}
                onClick={(event) => event.stopPropagation()}
            >
                <CloseButton
                    type="button"
                    onClick={onClose}
                    aria-label="Close product details"
                >
                    ×
                </CloseButton>

                <ModalImage src={image} alt={name} />

                <ModalContent>
                    <ModalTitle id={`dish-${id}-title`}>{name}</ModalTitle>

                    <ModalDescription>{description}</ModalDescription>

                    {portion && <Portion>Serves: {portion}</Portion>}

                    <Price>{formattedPrice}</Price>

                    <PurchaseButton type="button" onClick={addToCart}>
                        Add to cart
                    </PurchaseButton>
                </ModalContent>
            </ModalContainer>
        </ModalOverlay>
    )
}

export default ProductModal