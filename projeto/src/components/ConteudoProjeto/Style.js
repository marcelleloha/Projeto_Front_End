import styled from "styled-components";

const ContainerFiltros = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-left: 100px;
    padding-right: 100px;
    flex-wrap: wrap;
    gap: 10px;
    padding-top: 30px;
    padding-bottom: 30px;

    .filtro {
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

    @media (max-width: 768px) {
        padding-left: 20px;
        padding-right: 20px;
    }

    @media (max-width: 480px) {
        padding-left: 10px;
        padding-right: 10px;
    }
`;

const ContainerDescricao = styled.div`
    padding-bottom: 30px;
    @media (min-width: 1000px) {
        
        padding-left: 100px;
        padding-right: 100px;
        .corpo {
            padding-top: 20px;
            display: flex;
            justify-content: space-between;
        }
        h2 {
            font-size: 48px;
        }
        .paragrafo {
        width: 50%;
        }
        .imagem {
            width: 45%;
        }
        
    }

    @media (max-width: 1000px) {
        padding: 0 30px;
        .corpo {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            gap: 40px;
        }
        h2 {
            font-size: 30px;
            margin-bottom: 20px;
        }
        .paragrafo{
            width: 100%
        }
        img {
            width: 70%;
            margin-bottom: 30px
        }
    }   





`
const ContainerDeTec = styled.div `


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

    @media (min-width: 1000px) {
        padding: 20px 100px;

    }

    @media (max-width: 1000px) {
        padding: 20px 30px;
        gap: 20px;
        #tec1 {
            font-size: 20px;
            width: 100%;
        }
        #tec2 {
            font-size: 20px;
            width: 100%;
        }
    }

    @media (max-width: 768px) {
        gap: 20px;
        #tec1 {
            font-size: 15px;
            width: 100%;
        }
        #tec2 {
            font-size: 15px;
            width: 100%;
        }
    }

`
const Integrantes = styled.div `


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
        flex-wrap: wrap;
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

    @media (min-width: 1000px) {
        padding: 0 100px;
        padding-bottom: 40px;
    }
    
    @media (max-width: 1000px) {
        padding: 0 30px;
        padding-bottom: 40px;
    }
    
    @media (max-width: 768px) {
        padding: 0 30px;
        padding-bottom: 40px;
        
    }

`

export {ContainerFiltros, ContainerDescricao, ContainerDeTec, Integrantes} 

