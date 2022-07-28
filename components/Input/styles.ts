import styled from "styled-components";

interface InputContainerProps {
    w: string
    type: string
}

export const InputContainer = styled.div<InputContainerProps>`
    display: flex;
    flex-direction: column;
    width: ${props => props.w};
    padding: 0.5rem;
    margin: ${props => props.type === 'submit'? '0 auto' : '0'};
    
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
    
    &&[type="submit"] {
        background: ${props => props.theme['primary']};
        color: ${props => props.theme['secondary']};
    }
`

export const InputText = styled(BaseInput)`

`

export const InputNumber = styled(BaseInput)`

`

export const InputSubmit = styled(BaseInput)`

`