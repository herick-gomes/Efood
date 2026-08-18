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
        receiver: Yup.string().required('Campo obrigatório'),
        address: Yup.string().required('Campo obrigatório'),
        city: Yup.string().required('Campo obrigatório'),
        zipCode: Yup.string().required('Campo obrigatório'),
        number: Yup.string().required('Campo obrigatório')
    })

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => onContinue(values)}
        >
            {({ errors, touched }) => (
                <Form>
                    <Title>Entrega</Title>

                    <FieldGroup>
                        <Label htmlFor="receiver">Quem irá receber</Label>
                        <Input
                            id="receiver"
                            name="receiver"
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
                            $hasError={Boolean(errors.city && touched.city)}
                        />
                        {errors.city && touched.city && (
                            <ErrorMessage>{errors.city}</ErrorMessage>
                        )}
                    </FieldGroup>

                    <Row>
                        <FieldGroup>
                            <Label htmlFor="zipCode">CEP</Label>
                            <Input
                                id="zipCode"
                                name="zipCode"
                                $small
                                $hasError={Boolean(errors.zipCode && touched.zipCode)}
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
                        <Input id="complement" name="complement" />
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