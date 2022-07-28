import styled from "styled-components";

export const SpinnerContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    border-radius: 0.25rem;

    background: #FFFFFFBF;
    backdrop-filter: blur(0.75px);
    display: flex;
    justify-content: center;
    align-items: center;
`