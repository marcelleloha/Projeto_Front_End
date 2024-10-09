import styled from "styled-components"

const Top = styled.header`
  background-color: white;
  margin: 0;
  padding-left: 100px;
  padding-right: 100px;
  
  #navbar {
    display: flex;
    justify-content: space-between;
    

  }

  #navegacao {
    display: flex;
    justify-content: space-between;
    width: 400px
  }

  a {
    text-decoration: none;
    text-align: center;
    color: #424242;
    font-size: 14px;
    padding-top: 28px

  }
  
  img {
    width: 70px
  }
`

export {Top}