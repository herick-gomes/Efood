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
    Row,
    Subtitle,
    Title
} from './styles'

export type DeliveryData = {
    receiver: string
    address: string
    city: string
    zipCode: string
    number: string
    complement: string
}

type Props = {
    onBack: () => void
    onContinue: (deliveryData: DeliveryData) => void
}

const Delivery = ({ onBack, onContinue }: Props) => {
    const initialValues: DeliveryData = {
        receiver: '',
        address: '',
        city: '',
        zipCode: '',
        number: '',
        complement: ''
    }

    const validationSchema = Yup.object({
        receiver: Yup.string()
            .min(3, 'Enter a valid name')
            .required('This field is required'),

        address: Yup.string()
            .min(5, 'Enter a valid address')
            .required('This field is required'),

        city: Yup.string()
            .min(2, 'Enter a valid city')
            .required('This field is required'),

        zipCode: Yup.string()
            .matches(/^\d{5}-\d{3}$/, 'Enter a valid postal code')
            .required('This field is required'),

        number: Yup.string()
            .matches(/^\d+$/, 'Use numbers only')
            .required('This field is required'),

        complement: Yup.string()
    })

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => onContinue(values)}
        >
            {({ errors, touched, values, handleChange, handleBlur }) => (
                <Form>
                    <Title>Delivery details</Title>

                    <Subtitle>
                        Tell us where you would like your order to be delivered.
                    </Subtitle>

                    <FieldGroup>
                        <Label htmlFor="receiver">Recipient name</Label>

                        <Input
                            id="receiver"
                            name="receiver"
                            placeholder="Full name"
                            autoComplete="name"
                            value={values.receiver}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            $hasError={Boolean(errors.receiver && touched.receiver)}
                        />

                        {errors.receiver && touched.receiver && (
                            <ErrorMessage>{errors.receiver}</ErrorMessage>
                        )}
                    </FieldGroup>

                    <FieldGroup>
                        <Label htmlFor="address">Address</Label>

                        <Input
                            id="address"
                            name="address"
                            placeholder="Street and address"
                            autoComplete="street-address"
                            value={values.address}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            $hasError={Boolean(errors.address && touched.address)}
                        />

                        {errors.address && touched.address && (
                            <ErrorMessage>{errors.address}</ErrorMessage>
                        )}
                    </FieldGroup>

                    <FieldGroup>
                        <Label htmlFor="city">City</Label>

                        <Input
                            id="city"
                            name="city"
                            placeholder="City"
                            autoComplete="address-level2"
                            value={values.city}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            $hasError={Boolean(errors.city && touched.city)}
                        />

                        {errors.city && touched.city && (
                            <ErrorMessage>{errors.city}</ErrorMessage>
                        )}
                    </FieldGroup>

                    <Row>
                        <FieldGroup>
                            <Label htmlFor="zipCode">Postal code</Label>

                            <InputMask
                                id="zipCode"
                                name="zipCode"
                                mask="99999-999"
                                placeholder="00000-000"
                                autoComplete="postal-code"
                                value={values.zipCode}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                    errors.zipCode && touched.zipCode ? 'input-error' : ''
                                }
                            />

                            {errors.zipCode && touched.zipCode && (
                                <ErrorMessage>{errors.zipCode}</ErrorMessage>
                            )}
                        </FieldGroup>

                        <FieldGroup>
                            <Label htmlFor="number">Number</Label>

                            <Input
                                id="number"
                                name="number"
                                placeholder="123"
                                inputMode="numeric"
                                value={values.number}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                $hasError={Boolean(errors.number && touched.number)}
                            />

                            {errors.number && touched.number && (
                                <ErrorMessage>{errors.number}</ErrorMessage>
                            )}
                        </FieldGroup>
                    </Row>

                    <FieldGroup>
                        <Label htmlFor="complement">Additional details</Label>

                        <Input
                            id="complement"
                            name="complement"
                            placeholder="Apartment, suite, landmark... (optional)"
                            autoComplete="address-line2"
                            value={values.complement}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </FieldGroup>

                    <ButtonsContainer>
                        <Button type="submit">Continue to payment</Button>

                        <Button type="button" $secondary onClick={onBack}>
                            Back to cart
                        </Button>
                    </ButtonsContainer>
                </Form>
            )}
        </Formik>
    )
}

export default Delivery