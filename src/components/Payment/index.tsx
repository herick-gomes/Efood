import { Formik } from 'formik'
import * as Yup from 'yup'

import {
    Button,
    ButtonsContainer,
    ErrorMessage,
    FieldGroup,
    Form,
    Input,
    Label,
    PaymentRow,
    Title,
    ValidityRow
} from './styles'

export type PaymentData = {
    cardName: string
    cardNumber: string
    cvv: string
    expiresMonth: string
    expiresYear: string
}

type Props = {
    total: number
    onBack: () => void
    onSubmitPayment: (paymentData: PaymentData) => void
}

const Payment = ({ total, onBack, onSubmitPayment }: Props) => {
    const initialValues: PaymentData = {
        cardName: '',
        cardNumber: '',
        cvv: '',
        expiresMonth: '',
        expiresYear: ''
    }

    const validationSchema = Yup.object({
        cardName: Yup.string().required('Campo obrigatório'),
        cardNumber: Yup.string().required('Campo obrigatório'),
        cvv: Yup.string().required('Campo obrigatório'),
        expiresMonth: Yup.string().required('Campo obrigatório'),
        expiresYear: Yup.string().required('Campo obrigatório')
    })

    const formattedTotal = total.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => onSubmitPayment(values)}
        >
            {({ errors, touched }) => (
                <Form>
                    <Title>Pagamento - Valor a pagar {formattedTotal}</Title>

                    <FieldGroup>
                        <Label htmlFor="cardName">Nome no cartão</Label>
                        <Input
                            id="cardName"
                            name="cardName"
                            $hasError={Boolean(errors.cardName && touched.cardName)}
                        />
                        {errors.cardName && touched.cardName && (
                            <ErrorMessage>{errors.cardName}</ErrorMessage>
                        )}
                    </FieldGroup>

                    <PaymentRow>
                        <FieldGroup>
                            <Label htmlFor="cardNumber">Número do cartão</Label>
                            <Input
                                id="cardNumber"
                                name="cardNumber"
                                $width="228px"
                                $hasError={Boolean(errors.cardNumber && touched.cardNumber)}
                            />
                            {errors.cardNumber && touched.cardNumber && (
                                <ErrorMessage>{errors.cardNumber}</ErrorMessage>
                            )}
                        </FieldGroup>

                        <FieldGroup>
                            <Label htmlFor="cvv">CVV</Label>
                            <Input
                                id="cvv"
                                name="cvv"
                                $width="87px"
                                $hasError={Boolean(errors.cvv && touched.cvv)}
                            />
                            {errors.cvv && touched.cvv && (
                                <ErrorMessage>{errors.cvv}</ErrorMessage>
                            )}
                        </FieldGroup>
                    </PaymentRow>

                    <ValidityRow>
                        <FieldGroup>
                            <Label htmlFor="expiresMonth">Mês de vencimento</Label>
                            <Input
                                id="expiresMonth"
                                name="expiresMonth"
                                $width="155px"
                                $hasError={Boolean(
                                    errors.expiresMonth && touched.expiresMonth
                                )}
                            />
                            {errors.expiresMonth && touched.expiresMonth && (
                                <ErrorMessage>{errors.expiresMonth}</ErrorMessage>
                            )}
                        </FieldGroup>

                        <FieldGroup>
                            <Label htmlFor="expiresYear">Ano de vencimento</Label>
                            <Input
                                id="expiresYear"
                                name="expiresYear"
                                $width="155px"
                                $hasError={Boolean(errors.expiresYear && touched.expiresYear)}
                            />
                            {errors.expiresYear && touched.expiresYear && (
                                <ErrorMessage>{errors.expiresYear}</ErrorMessage>
                            )}
                        </FieldGroup>
                    </ValidityRow>

                    <ButtonsContainer>
                        <Button type="submit">Finalizar pagamento</Button>

                        <Button type="button" onClick={onBack}>
                            Voltar para a edição de endereço
                        </Button>
                    </ButtonsContainer>
                </Form>
            )}
        </Formik>
    )
}

export default Payment