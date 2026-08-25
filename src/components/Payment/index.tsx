import { Formik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

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
        cardName: Yup.string()
            .min(3, 'Digite um nome válido')
            .required('Campo obrigatório'),

        cardNumber: Yup.string()
            .matches(/^\d{4} \d{4} \d{4} \d{4}$/, 'Digite o número completo do cartão')
            .required('Campo obrigatório'),

        cvv: Yup.string()
            .matches(/^\d{3}$/, 'O CVV deve conter 3 números')
            .required('Campo obrigatório'),

        expiresMonth: Yup.string()
            .matches(/^(0[1-9]|1[0-2])$/, 'Digite um mês válido')
            .required('Campo obrigatório'),

        expiresYear: Yup.string()
            .matches(/^\d{2}$/, 'Digite um ano válido')
            .required('Campo obrigatório')
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
            {({ errors, touched, values, handleChange, handleBlur }) => (
                <Form>
                    <Title>Pagamento - Valor a pagar {formattedTotal}</Title>

                    <FieldGroup>
                        <Label htmlFor="cardName">Nome no cartão</Label>
                        <Input
                            id="cardName"
                            name="cardName"
                            value={values.cardName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            $hasError={Boolean(errors.cardName && touched.cardName)}
                        />
                        {errors.cardName && touched.cardName && (
                            <ErrorMessage>{errors.cardName}</ErrorMessage>
                        )}
                    </FieldGroup>

                    <PaymentRow>
                        <FieldGroup>
                            <Label htmlFor="cardNumber">Número do cartão</Label>

                            <InputMask
                                id="cardNumber"
                                name="cardNumber"
                                mask="9999 9999 9999 9999"
                                value={values.cardNumber}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                    errors.cardNumber && touched.cardNumber ? 'input-error' : ''
                                }
                            />

                            {errors.cardNumber && touched.cardNumber && (
                                <ErrorMessage>{errors.cardNumber}</ErrorMessage>
                            )}
                        </FieldGroup>

                        <FieldGroup>
                            <Label htmlFor="cvv">CVV</Label>

                            <InputMask
                                id="cvv"
                                name="cvv"
                                mask="999"
                                value={values.cvv}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={errors.cvv && touched.cvv ? 'input-error' : ''}
                            />

                            {errors.cvv && touched.cvv && (
                                <ErrorMessage>{errors.cvv}</ErrorMessage>
                            )}
                        </FieldGroup>
                    </PaymentRow>

                    <ValidityRow>
                        <FieldGroup>
                            <Label htmlFor="expiresMonth">Mês de vencimento</Label>

                            <InputMask
                                id="expiresMonth"
                                name="expiresMonth"
                                mask="99"
                                value={values.expiresMonth}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                    errors.expiresMonth && touched.expiresMonth
                                        ? 'input-error'
                                        : ''
                                }
                            />

                            {errors.expiresMonth && touched.expiresMonth && (
                                <ErrorMessage>{errors.expiresMonth}</ErrorMessage>
                            )}
                        </FieldGroup>

                        <FieldGroup>
                            <Label htmlFor="expiresYear">Ano de vencimento</Label>

                            <InputMask
                                id="expiresYear"
                                name="expiresYear"
                                mask="99"
                                value={values.expiresYear}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                    errors.expiresYear && touched.expiresYear
                                        ? 'input-error'
                                        : ''
                                }
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