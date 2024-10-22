import styled from "styled-components"

const Div = styled.div `
    margin-left: 100px;
    margin-right: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 30px;
    gap: 5px;
    padding-bottom: 50px;

    
    #no-underline {
        text-decoration: none;
        color: black;
    }
`

export {Div}