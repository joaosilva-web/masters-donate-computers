import styled from 'styled-components';

export const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${props => props.theme['primary']};

  & > main {
    padding-top: 6rem;
    padding-bottom: 1rem;
  }
`;

export const Header = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: ${props => props.theme['primary']};
  z-index: 999;
  height: 5rem;
`;
