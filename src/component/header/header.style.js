import styled from 'styled-components'

export const ContainerHeader = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Title = styled.h1`
    text-align: center;
`

export const Barra = styled.div`
    width: 80%;
    height: 1.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    padding-top: 0.5%;
    padding-bottom: 0.5%;
    font-size: 1.2rem;
    font-weight: bold;
`

export const GridOrList = styled.div`
    display: flex;
`

export const ContainerButtomList = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
`

export const ButtonList = styled.button`
    outline: none;
    text-decoration: none;
    background-color: #c6ccc7;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        color: #017c37;
    }
` 

export const ImgList = styled.img`
    width: 20px;
`
export const ContainerButtomGrid = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
`
export const ButtonGrid = styled.button`
    outline: none;
    text-decoration: none;
    background-color: #c6ccc7;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        color: #017c37;
    }
    &::selection {
        background: green;
        color: black;
        text-shadow: 1px 1px #fff;
    }
    &::-moz-selection {
        background: green;
        color: black;
        text-shadow: 1px 1px #fff;
    }
` 
export const ImgGrid = styled.img`
    width: 20px;
`
