import styled from "styled-components";

const Container = styled.div `  
    width: 15em;
    border-radius: 5px;
    background-color: #F5F5F5;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, .08);

    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;

  button {
    background-color: #F5AC00;
    border: 0;
    margin-top: 20px;
    padding: 15px;
    border-radius: 6px;
    width: 100%;
    font-size: 28px;
  }

  @media (max-width: 1024px) {
    width: 90%;
    padding: 20px;
    height: auto;

    p {
      font-size: 42px;
    }

    input {
      width: 90%;
    }
    button:hover {
        background-color: #f57c00;
    }

    button {
      font-size: 24px;
      padding: 12px;
    }
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 20px;
    height: auto;

    p {
      font-size: 36px;
    }

    input {
      width: 80%;
    }

    button {
      font-size: 20px;
      padding: 10px;
    }
  }

  @media (max-width: 480px) {
    width: 90%;
    padding: 10px;
    height: auto;

    p {
      font-size: 28px;
    }

    input {
      width: 80%;
    }

    button {
      font-size: 16px;
      padding: 8px;
    }
  }
`;

export { Container };
