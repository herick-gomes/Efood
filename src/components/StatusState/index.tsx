import {
    ActionButton,
    Description,
    Spinner,
    StateContainer,
    Title
} from './styles'

type Props = {
    title: string
    description: string
    loading?: boolean
    actionLabel?: string
    onAction?: () => void
}

const StatusState = ({
    title,
    description,
    loading = false,
    actionLabel,
    onAction
}: Props) => (
    <StateContainer>
        {loading && <Spinner aria-hidden="true" />}

        <Title>{title}</Title>

        <Description>{description}</Description>

        {!loading && actionLabel && onAction && (
            <ActionButton type="button" onClick={onAction}>
                {actionLabel}
            </ActionButton>
        )}
    </StateContainer>
)

export default StatusState