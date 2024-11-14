import styled from "styled-components";

const Container = styled.div`
    width: 15em;
    border-radius: 5px;
    background-color: #D9D9D9;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, .08);
    display: flex;
    margin: 10px;
    padding: 15px 15px;
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

    .divPrincipal {
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

    .botao {
        border: 0;
        background-color: #F5AC00;
        font-size: 16px;
        width: 100%;
        border-radius: 6px;
        padding: 5px 0;
        cursor: pointer;
    }

    .class-botao {
        display: flex;
        justify-content: center;   
    }

    .titulo {
        height: 50px;
    }


    /* Media Query para telas médias */
    @media (max-width: 768px) {
        display: flex;
        flex-wrap: wrap;  /* Permite que os cartões se ajustem lado a lado */
        justify-content: space-between;  /* Espaço entre os cartões */
        width: 100%;  /* Garantir que ocupe a largura total */

        /* Ajuste a largura dos cartões para 48% */
        .cartao {
            width: 48%;  /* Agora dois cartões ocupam 48% de largura */
            margin: 10px 0;  /* Margin para dar espaço entre os cartões */
        }

        .titulo-cima {
            font-size: 18px;
        }

        .titulo-baixo {
            font-size: 14px;
        }

        .texto-baixo {
            font-size: 12px;
        }

        .botao {
            font-size: 14px;
            padding-top: 8px;
            padding-bottom: 8px;
        }

        img {
            height: 100px;
        }
    }

    /* Media Query para telas pequenas */
    @media (max-width: 480px) {
        padding: 10px;

        .titulo-cima {
            font-size: 16px;
        }

        .titulo-baixo {
            font-size: 12px;
        }

        .texto-baixo {
            font-size: 10px;
        }

        .botao {
            font-size: 12px;
            padding-top: 6px;
            padding-bottom: 6px;
        }

        img {
            height: 80px;
        }
    }
`;




export { Container }

