import styled from "styled-components";

interface ContainerDefaultProps {
    bg: string
    h: string
}

export const ContainerDefault = styled.div<ContainerDefaultProps>`
    display: flex;
    background: ${props => props.theme[props.bg]};
    height: ${props => props.h};
`