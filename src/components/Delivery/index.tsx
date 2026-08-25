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
            .min(3, 'Digite um nome válido')
            .required('Campo obrigatório'),

        address: Yup.string()
            .min(5, 'Digite um endereço válido')
            .required('Campo obrigatório'),

        city: Yup.string()
            .min(2, 'Digite uma cidade válida')
            .required('Campo obrigatório'),

        zipCode: Yup.string()
            .matches(/^\d{5}-\d{3}$/, 'Digite um CEP válido')
            .required('Campo obrigatório'),

        number: Yup.string()
            .matches(/^\d+$/, 'Digite apenas números')
            .required('Campo obrigatório'),

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
                    <Title>Entrega</Title>

                    <FieldGroup>
                        <Label htmlFor="receiver">Quem irá receber</Label>
                        <Input
                            id="receiver"
                            name="receiver"
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
                        <Label htmlFor="address">Endereço</Label>
                        <Input
                            id="address"
                            name="address"
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
                        <Label htmlFor="city">Cidade</Label>
                        <Input
                            id="city"
                            name="city"
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
                            <Label htmlFor="zipCode">CEP</Label>

                            <InputMask
                                id="zipCode"
                                name="zipCode"
                                mask="99999-999"
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
                            <Label htmlFor="number">Número</Label>
                            <Input
                                id="number"
                                name="number"
                                value={values.number}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                inputMode="numeric"
                                $small
                                $hasError={Boolean(errors.number && touched.number)}
                            />
                            {errors.number && touched.number && (
                                <ErrorMessage>{errors.number}</ErrorMessage>
                            )}
                        </FieldGroup>
                    </Row>

                    <FieldGroup>
                        <Label htmlFor="complement">Complemento (opcional)</Label>
                        <Input
                            id="complement"
                            name="complement"
                            value={values.complement}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </FieldGroup>

                    <ButtonsContainer>
                        <Button type="submit">Continuar com o pagamento</Button>

                        <Button type="button" onClick={onBack}>
                            Voltar para o carrinho
                        </Button>
                    </ButtonsContainer>
                </Form>
            )}
        </Formik>
    )
}

export default Delivery