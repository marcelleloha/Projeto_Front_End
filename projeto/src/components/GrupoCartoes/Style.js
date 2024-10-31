// import styled from "styled-components"

// const Div = styled.div `
//     margin-left: 100px;
//     margin-right: 100px;
//     display: flex;
//     flex-direction: row;
//     justify-content: space-around;
//     flex-wrap: wrap;
//     margin-top: 30px;
//     gap: 5px;
//     padding-bottom: 50px;
//     background-color: #F5F5F5;

    
//     #no-underline {
//         text-decoration: none;
//         color: black;
//     }
// `

// export {Div}



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
    background-color: #F5F5F5;

    #no-underline {
        text-decoration: none;
        color: black;
    }

    // Media query para telas grandes (desktop)
    @media (min-width: 1024px) {
        margin-left: 100px;
        margin-right: 100px;
        gap: 20px;
    }

    // Media query para telas médias (tablets)
    @media (min-width: 768px) and (max-width: 1023px) {
        margin-left: 50px;
        margin-right: 50px;
        gap: 15px;
    }

    // Media query para telas pequenas (dispositivos móveis)
    @media (max-width: 767px) {
        margin-left: 20px;
        margin-right: 20px;
        flex-direction: column;
        align-items: center;
        gap: 10px;
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
`
const Container = styled.div `
    display: flex;
    flex-direction: row;
    justify-content:space-between;
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

`

export { Div, Container2, Container }
