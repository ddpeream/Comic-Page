import styled from "styled-components";

export const ContainerHome = styled.div`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    heigtht: 100%;
    background-color: #c6ccc7;
`

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 83%;
    heigtht: 100%;
    grid-gap: -3%;
    padding-top: 8%;
    object-fit: cover;
`

export const ListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    width: 83%;
    heigtht: 100%;
    grid-gap: -3%;
    padding-top: 8%;
    object-fit: cover;
`
export const ContainerPaginatorHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding-top: 5%;
`

export const ContainerPaginatorFooter = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding-bottom: 5%;
`


export const ButtonSumm = styled.button`
    width: 10%;
    border-radius: 5px;
    outline: none;
`

export const ButtonRest = styled.button`
    width: 10%;
    border-radius: 5px;
    outline: none;
`