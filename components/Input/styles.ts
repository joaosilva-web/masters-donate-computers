import styled from "styled-components";

interface InputContainerProps {
    w: string
}

export const InputContainer = styled.div<InputContainerProps>`
    width: ${props => props.w};
    padding: 0.5rem;

`

export const BaseInput = styled.input`
    width: 100%;
    height: 2.5rem;
    border: 0;
    border-radius: 0.5rem;
    padding: 0.5rem;
    color: ${props => props.theme['gray-700']};
    font-weight: bold;

    &::placeholder {
        color: ${props => props.theme['gray-400']};
    }
`

export const InputText = styled(BaseInput)`

`

export const InputNumber = styled(BaseInput)`

`

export const InputSubmit = styled(BaseInput)`

`