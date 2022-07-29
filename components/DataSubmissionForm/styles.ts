import styled from "styled-components";

export const FormDataContainer = styled.form`
position: relative;
padding: 0.5rem;
margin: 0.5rem;
border-radius: 0.25rem;
max-height: 100%;
background-color: ${props => props.theme['gray-50']};
`

export const FormGroupContainer = styled.div`
    display: flex;
    flex-wrap: wrap;

    width: 37.5rem; // 600px
    margin: 0 auto;
`

interface ButtonProps {
    w: string
}

export const Button = styled.button<ButtonProps>`
    margin: 0 auto;
    width: 50%;
    height: 2.5rem;
    border: 0;
    border-radius: 0.5rem;
    padding: 0.5rem;
    color: ${props => props.theme['gray-700']};
    font-weight: bold;
    background: ${props => props.theme['primary']};
    color: ${props => props.theme['secondary']};

    cursor: pointer;
    transition: 0.5s ease;

    &:hover {
        background-color: ${props => props.theme['blue-500']};
    }
`