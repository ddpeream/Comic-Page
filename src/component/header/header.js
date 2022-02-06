import React from 'react'
import {
    Title, 
    ContainerHeader, 
    GridOrList, 
    Barra, 
    ContainerButtomList,
    ButtonList,
    ImgList,
    ContainerButtomGrid,
    ButtonGrid,
    ImgGrid,
} from './header.style'
import imgList from '../../image/list.png'
import imgGrid from '../../image/pixels.png'

export default function Header(props){

    const {handleList, handleGrid} = props

    return (
        <ContainerHeader>
            <Title>ComicBook</Title>
            <Barra>
                <p>Latest Issues</p>
                <GridOrList>
                    <ContainerButtomList>
                        <ButtonList onClick={handleList} >
                            <ImgList src={imgList} alt='List' />
                            List
                        </ButtonList>
                    </ContainerButtomList>
                    <div>
                        <ContainerButtomGrid>
                            <ButtonGrid onClick={handleGrid} >
                            <ImgGrid src={imgGrid} alt='Grid'/>
                                Grid
                            </ButtonGrid>
                        </ContainerButtomGrid>
                    </div>
                </GridOrList>
            </Barra>
        </ContainerHeader>
    )
}