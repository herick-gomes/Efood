import closeIcon from '../../assets/images/close.png'

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
    name: string
    description: string
    image: string
    price: number
    portion: string
}

const ProductModal = ({
    isOpen,
    onClose,
    name,
    description,
    image,
    price,
    portion
}: Props) => {
    if (!isOpen) {
        return null
    }

    const formattedPrice = price.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })

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

                    <PurchaseButton type="button">
                        Adicionar ao carrinho - {formattedPrice}
                    </PurchaseButton>
                </ModalContent>
            </ModalContainer>
        </ModalOverlay>
    )
}

export default ProductModal