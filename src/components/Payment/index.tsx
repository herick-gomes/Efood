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
    PriceBox,
    PriceLabel,
    PriceValue,
    Subtitle,
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
            .min(3, 'Enter a valid name')
            .required('This field is required'),

        cardNumber: Yup.string()
            .matches(
                /^\d{4} \d{4} \d{4} \d{4}$/,
                'Enter the complete card number'
            )
            .required('This field is required'),

        cvv: Yup.string()
            .matches(/^\d{3}$/, 'CVV must contain 3 digits')
            .required('This field is required'),

        expiresMonth: Yup.string()
            .matches(/^(0[1-9]|1[0-2])$/, 'Enter a valid month')
            .required('This field is required'),

        expiresYear: Yup.string()
            .matches(/^\d{2}$/, 'Enter a valid year')
            .required('This field is required')
    })

    const formattedTotal = total.toLocaleString('en-US', {
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
                    <Title>Payment details</Title>

                    <Subtitle>
                        Enter your card information to securely complete your order.
                    </Subtitle>

                    <PriceBox>
                        <PriceLabel>Order total</PriceLabel>
                        <PriceValue>{formattedTotal}</PriceValue>
                    </PriceBox>

                    <FieldGroup>
                        <Label htmlFor="cardName">Name on card</Label>

                        <Input
                            id="cardName"
                            name="cardName"
                            placeholder="Full name"
                            autoComplete="cc-name"
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
                            <Label htmlFor="cardNumber">Card number</Label>

                            <InputMask
                                id="cardNumber"
                                name="cardNumber"
                                mask="9999 9999 9999 9999"
                                placeholder="0000 0000 0000 0000"
                                autoComplete="cc-number"
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
                                placeholder="123"
                                autoComplete="cc-csc"
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
                            <Label htmlFor="expiresMonth">Expiry month</Label>

                            <InputMask
                                id="expiresMonth"
                                name="expiresMonth"
                                mask="99"
                                placeholder="MM"
                                autoComplete="cc-exp-month"
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
                            <Label htmlFor="expiresYear">Expiry year</Label>

                            <InputMask
                                id="expiresYear"
                                name="expiresYear"
                                mask="99"
                                placeholder="YY"
                                autoComplete="cc-exp-year"
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
                        <Button type="submit">Place order</Button>

                        <Button type="button" $secondary onClick={onBack}>
                            Back to delivery
                        </Button>
                    </ButtonsContainer>
                </Form>
            )}
        </Formik>
    )
}

export default Payment