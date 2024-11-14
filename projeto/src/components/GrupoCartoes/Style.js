import styled from "styled-components";

const Div = styled.div`
  margin-left: 100px;
  margin-right: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 5px;
  padding-bottom: 50px;
  background-color: #F5F5F5;

  #no-underline {
    text-decoration: none;
    color: black;
  }

  @media (max-width: 1024px) {
    margin-left: 50px;
    margin-right: 50px;
  }

  @media (max-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 480px) {
    margin-left: 10px;
    margin-right: 10px;
    gap: 10px;
  }
`;

export { Div };
