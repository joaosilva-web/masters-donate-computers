import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem 2.8rem 1rem 2.8rem;

  .container {
    max-width: 1420px;
    margin: 0 auto;
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 0 30px 0;
    font-size: 1rem;
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
  align-items: center;
  flex-direction: row;
  padding-top: 10px;

  @media (max-width: 1030px) {
    flex-direction: column-reverse;
  }
`;

export const InternsWrapper = styled.div`
  display: flex;
  align-items: baseline;

  position: relative;

  div.line {
    width: 1px;
    position: absolute;
    top: 35px;
    bottom: 0;
    left: 49.9%;
    height: 88%;

    background-color: #ffffff69;
  }

  @media (max-width: 680px) {
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 680px) {
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
  width: 280px;

  > div {
    background-color: rgba(255, 255, 255, 0.04);
    padding: 1rem;
    border-radius: 5px;
  }

  hr {
    width: 0;
  }

  > span {
    font-size: 0.8rem;
    font-weight: 500;
    color: #fff;
  }
`;

export const Intern = styled.div`
  margin-top: 10px;
  margin-bottom: 5px;

  div {
    font-size: 0.85rem;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  div {
    color: #fff;
    font-weight: 500;
  }

  img {
    width: 65px;
    height: 65px;
    border-radius: 50%;
    margin-right: 10px;
    border: 3px solid ${({ theme }) => theme["gray-100"]};
  }

  @media (min-width: 860px) {
  }
`;

export const Social = styled.div`
  font-size: 0.75rem;

  div {
    display: flex;
    align-items: center;
    margin-top: 5px;

    a {
      background-color: #027fb3;
      height: 22px;
      width: 22px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 5px;

      transition: background-color 0.3s ease;

      &:not(:last-child) {
        margin-right: 5px;
      }

      svg {
        font-size: 0.75rem;
        color: #fff;
      }

      &:hover {
        background-color: rgba(255, 255, 255, 0.2);
      }
    }
  }
`;

export const Description = styled.div`
  text-align: center;
  padding: 3rem 3rem 2rem 3rem;

  font-size: 1.185rem;

  color: #fff;

  a {
    border-radius: 2px;
    color: white;
    font-weight: 500;
    text-decoration: none;
  }

  div {
    margin-top: 10px;
    display: flex;
    justify-content: center;

    span {
      display: flex;
      align-items: center;
      font-weight: 500;
      font-size: 0.8rem;
      margin-right: 10px;
    }

    a {
      margin-top: 10px;
      background-color: #027fb3;
      border-radius: 7px;
      padding: 0.6rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 10px;
      font-size: 0.9rem;
      transition: background-color 0.3s ease;
      border: 1px solid #027fb3;

      svg {
        margin-right: 5px;
      }

      &:hover {
        background-color: ${({ theme }) => theme["primary"]};
        border: 1px solid ${({ theme }) => theme["blue-300"]};
      }
    }
  }

  @media (max-width: 740px) {
    padding: 3rem 0 2rem 0;
  }
`;
