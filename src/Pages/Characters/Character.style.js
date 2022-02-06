import styled from "styled-components";

export const Container = styled.div`
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

export const Title = styled.h1`
    text-align: center;
    width: 100%;  
`

export const CharacterContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-left: 0%;
`

export const DescriptionCharacter = styled.div`

`
export const ContainerCharacters = styled.div`
    margin-bottom: 6%;
`
export const TitleCharacter = styled.h2`
    border-bottom: 2px solid #96989A;
    padding-bottom: 1%;
`

export const ContainerNameGeneral = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr)
`

export const CharacterName = styled.a`
    outline: none;
    text-decoration: none;
    color: black;
    padding-left: 10%;
    color: #017c37;
`

export const ContainerTeams = styled.div`
    margin-bottom: 6%;
`

export const TitleTeam = styled.h2`
    border-bottom: 2px solid #96989A;
    padding-bottom: 1%;
`

export const TeamName = styled.a`
    outline: none;
    text-decoration: none;
    color: black;
    padding-left: 10%;
    color: #017c37;
`

export const ContainerLocations = styled.div`
    margin-bottom: 6%;
`
export const TitleLocation = styled.h2`
    border-bottom: 2px solid #96989A;
    padding-bottom: 1%;
`

export const LocationName = styled.a`
    outline: none;
    text-decoration: none;
    color: black;
    padding-left: 10%;
    color: #017c37;
    margin-bottom: 10%;
`

export const ContainerConcepts = styled.div`
`
export const TitleConcepts = styled.h2`
    border-bottom: 2px solid #96989A;
    padding-bottom: 1%;
`

export const ConceptsName = styled.a`
    outline: none;
    text-decoration: none;
    color: black;
    padding-left: 10%;
    color: #017c37;
    margin-bottom: 10%;
`

export const ImgContainer = styled.figure`
    width: 100%;
    height: 70%;
`

export const Img =styled.img`
    width: 95%;
    height: 100%;
`