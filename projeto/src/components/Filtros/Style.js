import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 100px;
    padding-right: 100px;
    flex-wrap: wrap;
    gap: 10px;
    padding-top: 30px;
    padding-bottom: 30px;

    .select {
        width: 200px;
        text-align: center;
    }

    @media (max-width: 768px) {
        padding-left: 20px;
        padding-right: 20px;
    }

    @media (max-width: 480px) {
        flex-direction: column;
        padding-left: 10px;
        padding-right: 10px;
    }
`;

const Container2 = styled.div`
    padding-left: 100px;
    padding-right: 100px;

    #parteBaixo {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-top: 20px;
    }

    #inputWraper {
        background-color: white;
        width: 50%;
        border-radius: 10px;
        height: 2.5rem;
        padding: 0 15px;
        box-shadow: 0px 0px 8px #ddd;
        display: flex;
        align-items: center;
    }

    input {
        background-color: transparent;
        border: none;
        height: 100%;
        margin-left: 5px;
        width: 100%;
    }

    @media (max-width: 768px) {
        padding-left: 20px;
        padding-right: 20px;

        #inputWraper {
            width: 70%;
        }
    }

    @media (max-width: 480px) {
        padding-left: 10px;
        padding-right: 10px;

        #inputWraper {
            width: 100%;
        }
    }
`;

const Container3 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 100px;
    padding-right: 100px;
    flex-wrap: wrap;
    gap: 10px;
    padding-top: 30px;

    @media (max-width: 768px) {
        padding-left: 20px;
        padding-right: 20px;
    }

    @media (max-width: 480px) {
        flex-direction: column;
        padding-left: 10px;
        padding-right: 10px;
    }
`;

export { Container, Container2, Container3 };
