import styled from "styled-components";

interface SelectContainerProps {
    w: string
}

export const SelectContainer = styled.div<SelectContainerProps>`
    width: ${props => props.w};
    padding: 0.5rem;
`

export const SelectInput = styled.select`
    width: 100%;
    height: 2.5rem;
    padding: 0.5rem;
    
    border: 0;
    border-radius: 0.5rem;
    
    font-weight: bold;
    color: ${props => props.theme['gray-600']};

    option {
        font-weight: bold;
        min-height: 300px;
    }
`
