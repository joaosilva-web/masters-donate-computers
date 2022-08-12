import styled from 'styled-components';

export const Container = styled.div`
  padding: 5rem 2.8rem 1rem 2.8rem;

  .container {
    max-width: 1120px;
    margin: 0 auto;
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 0 30px 0;
    font-size: 0.8rem;
    color: #fff;

    svg {
      margin-left: 5px;
    }
  }

  @media (max-width: 720px) {
    padding: 5rem 1.5rem 1rem 1.5rem;
  }
`;

export const Header = styled.header`
  div {
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
  }

  a {
    background-color: black;
    height: 35px;
    width: 35px;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: white;
    }
  }

  border-bottom: 1px solid #ffffff69;
`;

export const Logo = styled.h4`
  color: white;
  font-size: 1.2rem;
  margin-bottom: 1rem;

  span {
    font-weight: 500;
  }
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column-reverse;
  flex-wrap: nowrap;
`;

export const InternsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  position: relative;

  div.line {
    width: 1px;
    position: absolute;
    top: 10px;
    bottom: 0;
    left: 50%;
    height: 100%;

    background-color: #ffffff69;
  }

  @media (min-width: 560px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  @media (min-width: 920px) {
    gap: 2rem;
  }

  @media (max-width: 1060px) {
    div.line {
      display: none;
    }
  }
`;

export const Interns = styled.div`
  margin-top: 10px;

  > div {
    background-color: rgba(255, 255, 255, 0.07);
    padding: 0.5rem;
    border-radius: 5px;
  }

  hr {
    width: 0;
  }

  > span {
    font-size: 0.7rem;
    font-weight: 500;
    color: #fff;
  }

  @media (min-width: 720px) {
    > div {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
      padding: 10px 50px;
    }
  }
`;

export const Intern = styled.div`
  margin-top: 10px;
  margin-bottom: 15px;
  span {
    font-size: 0.7rem;
  }
`;

export const Profile = styled.div`
  display: flex;

  span {
    color: ${({ theme }) => theme['secondary']};
    font-weight: 500;
    font-size: 0.8rem;
  }

  > a {
    color: ${({ theme }) => theme['gray-50']};
    font-size: 0.85rem;
    transition: background-color 0.3s ease;

    margin-top: 0.3rem;
    cursor: pointer;

    &:hover {
      background-color: #ffffff1a;
    }
  }

  img {
    width: 35px;
    height: 35px;
    background-color: #ffffff1a;
    border-radius: 50%;
    margin-right: 10px;
  }

  @media (min-width: 860px) {
    a {
      font-size: 0.8rem;
    }
  }
`;

export const Social = styled.div`
  font-size: 0.7rem;

  div {
    display: flex;
    align-items: center;
    margin-top: 5px;

    img {
      width: 20px;
      height: 20px;
    }
  }
`;

export const Description = styled.div`
  text-align: center;
  padding: 3rem 3.5rem 2rem 3.5rem;

  color: #fff;

  a {
    background-color: #ffffff1a;
    margin-left: 0.5rem;
    border-radius: 2px;
    color: white;
    font-weight: 500;
    text-decoration: none;

    &:hover {
      font-weight: 600;
    }
  }

  @media (max-width: 740px) {
    padding: 3rem 0 2rem 0;
  }
`;
