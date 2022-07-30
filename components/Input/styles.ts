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

export const LabelWrapper = styled.div`
    display:  flex;
    gap: 0.5rem;
    align-items: center;

    & > p {
        color: ${props => props.theme['red-300']};
        font-size: 0.75rem;
    }
`

interface BaseInputProps {
    errors?: any
}

export const BaseInput = styled.input<BaseInputProps>`
    width: 100%;
    height: 2.5rem;
    border: 0;
    border-radius: 0.5rem;
    padding: 0.5rem;
    color: ${props => props.theme['gray-700']};
    font-weight: bold;
    box-shadow: 0 0 0 2px ${props => props.errors? props.theme['red-300'] : 'transparent'};
    transition: 0.25s ease;

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