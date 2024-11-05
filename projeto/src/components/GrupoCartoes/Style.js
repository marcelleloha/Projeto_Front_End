import styled from "styled-components"

const Div = styled.div `
    @media (min-width: 1000px) {
        
        margin-left: 100px;
        margin-right: 100px;
        margin-bottom: 30px;
    }
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

    @media (min-width: 400px) {
        padding:0;
    }



`

const Container2 = styled.div `
    padding-left: 100px;
    padding-right: 100px;
    #parteBaixo{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-top: 20px;
    }
    #inputWraper{
        background-color: white;
        width: 50%;
        border-radius: 10px;
        height: 2.5rem;
        padding: 0 15px;
        box-shadow: 0px 0px 8px #ddd;
        display: flex;
        align-items: center

    }
    input {
        background-color: transparent;
        border: none;
        height: 100%;
        margin-left: 5px;
        width: 100%;
    }
    @media (max-width: 400px) {
        padding: 0;
        display: flex;
        justify-content: center;
        #parteBaixo {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        #parteBaixo{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
        }
        #inputWraper {
            width: 200px;
        }
    }
`
const Container = styled.div `
    display: flex;
    flex-direction: row;
    justify-content:space-around;
    padding-left: 100px;
    padding-right: 100px;
    flex-wrap: wrap;
    gap: 10px;
    padding-top: 30px;
    padding-bottom: 30px;

    #select {
        width: 200px;
        text-align: center;

    }

    .limpar-filtros{
        border: none;
        background-color: rgb(245, 172, 0);
        border-radius: 7px;
        padding-left: 10px;
        padding-right: 10px;
        min-height: 38px;
        cursor: pointer;
        width: 30%;
    }
    .limpar-filtros:hover{
        background-color: #ffffff;

    }

`

export { Div, Container2, Container }
