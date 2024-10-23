import styled from "styled-components"

const Container = styled.div `
    width: 15em;
    border-radius: 5px;
    background-color: #F5F5F5;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, .08);
    display: flex;
    margin: 10px;
    padding: 15px 15px; 
    width: 744px;
    justify-content: center;
    height:677px;
    align-items: center;

    p{
        font-size: 54px;
        font-weight: bold;
    }

    input {
        border: 0;
        background-color: #D9D9D9;
        padding: 15px 15px;
        width: 552px;
        border-radius: 10px;
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 30px;
        align-items: center;

    }
    button{
        background-color: #F5AC00;
        border: 0;
        margin-top: 20px;
        padding: 15px 15px;
        border-radius: 6px;
        width: 100%;
        font-size: 28px;
    }

`



export {Container}