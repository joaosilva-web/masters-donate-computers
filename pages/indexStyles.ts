import styled from "styled-components";
export const HomeWrapper= styled.div`
`

export const HeroContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
max-width: 80%;

margin: 1rem;

h1{
    font-size: 2.8125rem;
    line-height: 1;
}
h1,h2,h3,h4, p {
    color: ${props => props.theme['secondary']}
}

`