import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.7em;
  padding: 1em 0.5em;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 1024px) {
    padding: 1em;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    gap: 1em;
  }

  @media (max-width: 480px) {
    padding: 0.8em 0.5em;
    gap: 1.5em;
  }
`;

export { Container };
