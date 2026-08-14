import { useDispatch } from 'react-redux'

import closeIcon from '../../assets/images/close.png'
import { add } from '../../store/reducers/cart'

import {
    CloseButton,
    CloseIcon,
    ModalContainer,
    ModalContent,
    ModalDescription,
    ModalImage,
    ModalOverlay,
    ModalTitle,
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

    if (!isOpen) {
        return null
    }

    const formattedPrice = price.toLocaleString('pt-BR', {
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
                className="container"
                onClick={(event) => event.stopPropagation()}
            >
                <CloseButton type="button" onClick={onClose}>
                    <CloseIcon src={closeIcon} alt="Fechar" />
                </CloseButton>

                <ModalImage src={image} alt={name} />

                <ModalContent>
                    <ModalTitle>{name}</ModalTitle>

                    <ModalDescription>
                        {description}
                        <br />
                        <br />
                        Serve: {portion}
                    </ModalDescription>

                    <PurchaseButton type="button" onClick={addToCart}>
                        Adicionar ao carrinho - {formattedPrice}
                    </PurchaseButton>
                </ModalContent>
            </ModalContainer>
        </ModalOverlay>
    )
}

export default ProductModal