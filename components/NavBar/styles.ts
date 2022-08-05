import styled from "styled-components";

export const NavBarContainer = styled.div`
max-width: 1440px;
margin: 0 auto;
padding: 0 0.5%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
ul {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    gap: 16px;


}
`

export const LisItem = styled.li`
    a{
            text-decoration: none;
            font-weight: 400;
            font-size: 1.25rem;
            color: ${props => props.theme['secondary']};
            opacity: 0.8;
            transition: 0.25s ease;
        }

        a:hover {
            opacity: 1;
        }
`

export const ListItemActived = styled.li`
        a{
            text-decoration: none;
            font-weight: 400;
            font-size: 1.25rem;
            color: ${props => props.theme['secondary']};
            opacity: 1;
            transition: 0.25s ease;
        }

        a:hover {
            opacity: 1;
        }
`