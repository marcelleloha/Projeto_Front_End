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

export { Div }
