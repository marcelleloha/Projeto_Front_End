import styled from "styled-components"

const Container = styled.div `
    width: 15em;
    border-radius: 5px;
    background-color: #D9D9D9;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, .08);
    display: flex;
    margin: 10px;
    padding: 15px;
    height: auto;

    .titulo-cima {
        font-weight: bold;
        font-size: 20px;
        padding-bottom: 10px;
    }
    .titulo-baixo {
        font-style: italic;
        color: #424242;
        font-weight: bold;
        padding-bottom: 5px;
        padding-top: 10px;
    }

    .texto-baixo {
        font-style: italic;
        color: #424242; 
        font-size: 14px;   
    }
    .texto {
        padding: 0.5rem;
    }
    .divPrincipal{
        flex: 300px;
        box-sizing: border-box;
    }

    .corpo-card {
        height: 350px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    img {
        height: 120px;
    }

    .botao{
        border: 0;
        background-color: #F5AC00;
        font-size: 16px;
        width: 100%;
        border-radius: 6px;
        padding: 5px 0;
    }

    .class-botao {
        display: flex;
        justify-content: center;   
    }
    
    .titulo {
        height: 50px;
    }

    // Media query para telas médias (tablets)
    @media (max-width: 1024px) {
        width: 12em;
        padding: 10px;
        
        .titulo-cima {
            font-size: 18px;
        }
        .texto-baixo {
            font-size: 13px;
        }
        img {
            height: 100px;
        }
    }

    // Media query para telas pequenas (dispositivos móveis)
    @media (max-width: 600px) {
        width: 100%;
        padding: 8px;
        height: auto;

        .titulo-cima {
            font-size: 16px;
        }
        .titulo-baixo, .texto-baixo {
            font-size: 12px;
        }
        img {
            height: 80px;
            width: 100%;
            object-fit: cover;
        }
        .botao {
            font-size: 14px;
            padding: 4px 0;
        }
    }
`

export { Container }
