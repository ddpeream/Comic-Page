import React, { useState, useEffect }from 'react'
import {Container, Title, CharacterContainer, DescriptionCharacter, ContainerCharacters, ContainerTeams, ContainerLocations, ContainerConcepts, ImgContainer, Img, CharacterName, TitleCharacter, ContainerNameGeneral, TitleTeam, TeamName, TitleLocation, LocationName, TitleConcepts, ConceptsName } from "./Character.style"
import Loader from '../../component/comics/components/Loader'
import { useParams } from "react-router-dom";

function Characters (props){

    console.log('PARAMETROS: ', useParams())

    const { id } = useParams()

    const [comics, setComics] = useState(undefined)
    const [loading, setLoading] = useState(true)
    
    
    useEffect(() => {fetchCharacter()}, [])

    const fetchCharacter = () => {
        setLoading(true)
		fetch(`https://comicvine.gamespot.com/api/issue/4000-${id}/?api_key=1fd726850222c13e1744a5f520017cce39a55b42&format=json`)
        .then(response => response.json())
        .then(responseJson => {
            console.log('RESPUESTA DEL FETCHCHARACTER: ', responseJson.results);
            setComics(responseJson.results)
            setLoading(false);
        })
        .catch(error => {
            console.error(error);
        });
    }

    if(loading===true){
        return <Loader />
    }

    
    const {image, character_credits, team_credits, location_credits, concept_credits} = comics
    const img = image.original_url
        console.log('COMICS CHARACTER: ', character_credits)
        console.log('COMICS TEAM: ', team_credits)
        console.log('COMICS LOCATION: ',location_credits)
        console.log('COMICS CONCEPT: ', concept_credits)
        console.log('PROPS: ', props)

        
    return (
        <Container>
            <Title>ComicBook</Title>
            <CharacterContainer>
                <DescriptionCharacter>
                    <ContainerCharacters>
                        <TitleCharacter>
                            Character
                        </TitleCharacter>
                        <ContainerNameGeneral>
                        {character_credits.map(({name, id, site_detail_url}) => {
                             return (<CharacterName href={site_detail_url} key={id}>
                                {name}
                            </CharacterName>)
                        })}
                        </ContainerNameGeneral>
                    </ContainerCharacters>
                    <ContainerTeams>
                        <TitleTeam>Team</TitleTeam>
                        <ContainerTeams>
                            {team_credits.map(({name, id, site_detail_url}) => {
                                return (
                                    <TeamName key={id} href={site_detail_url}>
                                        {name}
                                    </TeamName>
                                )
                            })}
                        </ContainerTeams>
                    </ContainerTeams>
                    <ContainerLocations>
                        <TitleLocation>
                            Locations
                        </TitleLocation>
                        <ContainerNameGeneral>
                            {location_credits.map(({name, id, site_detail_url}) => {
                                return(
                                    <LocationName key={id} href={site_detail_url}>
                                        {name}
                                    </LocationName>
                                )
                            })}
                        </ContainerNameGeneral>
                    </ContainerLocations>
                    <ContainerConcepts>
                        <TitleConcepts>
                            Concepts
                        </TitleConcepts>
                        <ContainerNameGeneral>
                            {concept_credits.map(({name, id, site_detail_url}) => {
                                return(
                                    <ConceptsName key={id} href={site_detail_url}>
                                        {name}
                                    </ConceptsName>
                                )
                            })}
                        </ContainerNameGeneral>
                    </ContainerConcepts>
                </DescriptionCharacter>
                <ImgContainer>
                    <Img src={img} />
                </ImgContainer>
            </CharacterContainer>
        </Container>
    )
}

export default Characters;