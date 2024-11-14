import styled from "styled-components";

const Fot = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 100px;
    padding-right: 100px;
    flex-wrap: wrap;
    gap: 10px;
    padding-top: 30px;
    padding-bottom: 30px;
    background-color: rgb(0, 37, 85);
    color: white;
    text-decoration: none;

    .links {
        color: white;
        text-decoration: none;
    }

    @media (max-width: 768px) {
        padding-left: 20px;
        padding-right: 20px;
    }

    @media (max-width: 480px) {
        padding-left: 10px;
        padding-right: 10px;
    }
`;

export { Fot };
