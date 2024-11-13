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
const ContainerDeTec = styled.div `

    padding-left: 100px;
    padding-right: 100px;
    padding-bottom: 40px;
    padding-top: 40px;
    background-color: rgb(0, 37, 85);
    color: white;
    padding-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    #tec1 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 1000px;
        gap: 20px;
    }
    #tec2 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 1000px;
        gap: 20px;
    }

`
const Integrantes = styled.div `

    padding-left: 100px;
    padding-right: 100px;
    padding-bottom: 40px;
    background-color: #f5f5f5;

    h3 {
        font-weight: normal;
        margin-bottom: 20px;
        font-size: 32px;
        padding-top: 40px;
    }

    #integrantes{
        background-color: #CED4DC;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding: 10px 20px;
        border-radius: 6px;
    }

    #integrante {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    #dados2 {
        color: #4A4747
    }

`

export {ContainerFiltros, ContainerDescricao, ContainerDeTec, Integrantes} 