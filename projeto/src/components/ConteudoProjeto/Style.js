import styled from "styled-components"

const ContainerFiltros = styled.div `
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    padding-left: 100px;
    padding-right: 100px;
    flex-wrap: wrap;
    gap: 10px;
    padding-top: 30px;
    padding-bottom: 30px;
    .filtro{
        background-color: #D9D9D9;
        font-size: 16px;
        width: 114px;
        font-weight: bold;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 20px;
        padding-right: 20px;
        text-align: center;
        border-radius: 9px;
        display: flex;
        align-items: center;
        justify-content: center;

    }

`
const ContainerDescricao = styled.div `

    padding-left: 100px;
    padding-right: 100px;
    padding-bottom: 30px;

    h2 {
        font-size: 48px;
    }
    .corpo{
        padding-top: 20px;
        display: flex;
        justify-content: space-between
    }
    .paragrafo {
        width: 50%;
    }
    .imagem {
        width: 45%
    }

`

export {ContainerFiltros, ContainerDescricao} 