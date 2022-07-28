import styled from "styled-components";

export const FormDataContainer = styled.form`
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