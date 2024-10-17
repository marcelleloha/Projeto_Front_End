import styled from "styled-components"

const Container = styled.div `
    width: 15em;
    height: min-content;
    border-radius: 5px;
    margin: 10px;
    height: 20em;
    background-color: #f5f5f5f5;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, .08);
    display: flex;
    justify-content: center;
    padding-top: 10px;

    #titulo {
        text-decoration: wavy;
        padding: 0.5rem;
    }
    #texto {
        padding: 0.5rem
    }
    #divPrincipal{}
    img {
        height: 120px;
    }

    #no-underline {
    text-decoration: none;
    color: black;
    }
`



export {Container}