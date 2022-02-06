import React, { useState }from 'react'
import {ContainerHome, GridContainer, ListContainer, ContainerPaginatorHeader, ContainerPaginatorFooter, ButtonSumm, ButtonRest} from './Home.style';
import Header from '../../component/header/header'
import ComicsProvaider from '../../component/comics/comicsProvider.js'

function Home() {

  
  const [isTrue, setIsTues] = useState(true);
  const [offset, setOffset] = useState(0)
  const [limit, setLimit] = useState(16)


  function HandleList() {
    setIsTues(false)
  }

  function HandleGrid() {
    setIsTues(true)
  }

  function HandleOffsetSumm () {
    console.log('SUMANDO: ', offset)
    setOffset(offset+16) 
  }

  function HandleOffsetRest () {
    console.log('RESTANDO: ', offset)
    if(offset===0){
      setOffset(0)
    } else {
      setOffset(offset-16)
    }
    
  }

  const setLocalStorage = value => {
    try {
        window.localStorage.setItem('offset', JSON.stringify(value))
    } catch (error) {
      console.error(error)
    }
}



  return (
    <ContainerHome>
      <Header handleList={HandleList} handleGrid={HandleGrid} isTrue={isTrue}/>
        <ContainerPaginatorHeader>
          <ButtonRest onClick={HandleOffsetRest}>Anterior</ButtonRest>
          <ButtonSumm onClick={HandleOffsetSumm}>Siguiente</ButtonSumm>
        </ContainerPaginatorHeader>
      {isTrue===true?<GridContainer>
        <ComicsProvaider
          offset={offset} isTrue={isTrue}/>
      </GridContainer>:<ListContainer>
          <ComicsProvaider offset={offset} isTrue={isTrue} />
        </ListContainer>}
        <ContainerPaginatorFooter>
          <ButtonRest onClick={HandleOffsetRest}>Anterior</ButtonRest>
          <ButtonSumm onClick={HandleOffsetSumm}>Siguiente</ButtonSumm>
        </ContainerPaginatorFooter>
    </ContainerHome>
  );
}

export default Home;