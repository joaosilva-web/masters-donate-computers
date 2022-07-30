import styled from "styled-components";

export const FormDataContainer = styled.form`
position: relative;
padding: 0.5rem;
margin: 1rem;
border-radius: 0.25rem;
max-height: 100vh;
width: 50%;
background-color: ${props => props.theme['gray-50']};

overflow-y: scroll;

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 0.5rem;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
    background: ${props => props.theme['gray-300']};
    border-radius: 0.25rem;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: ${props => props.theme['gray-400']}; 
}


@media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 98%;
    max-height: 100%;
  }

  @media (max-width: 1440px) {

    width: 100%;
  }
`

export const FormGroupContainer = styled.div`
    display: flex;
    flex-wrap: wrap;

    width: 98%; // 600px
    margin: 0 auto;

    @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
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