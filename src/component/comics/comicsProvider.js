import { useEffect, useState } from 'react'
import ListComics from './components/list/ListComics'
import GridComics from './components/Grid/GridComics'
import Loader from './components/Loader';

export default function ComicsProvaider (props) {

    const [comics, setComics] = useState(undefined);
    const [loading, setLoading] = useState(true)
    //const [offset, setOffset] = useState(0)
    const [limit, setLimit] = useState(16)
    const {isTrue, offset} = props;
    
    useEffect(() => {fetchMovie()}, [offset])
    
    const fetchMovie = () => {
        setLoading(true)
		fetch(`https://comicvine.gamespot.com/api/issues/?api_key=1fd726850222c13e1744a5f520017cce39a55b42&format=json&offset=${offset}&limit=${limit}`)
			.then(response => response.json())
			.then(responseJson => {
                console.log('RESPUESTA DEL FETCH: ', responseJson.results);
                setComics(responseJson.results)
                setLoading(false);
            })
			.catch(error => {
				console.error(error);
			});
    }

    
    //console.log('OFFSET: ', offset); 
    //console.log('LIMIT: ', limit);
    //console.log('COMICS', comics);
    //console.log('ES TRUE: ', isTrue);

    if(loading===true){
        return (
            <div>
                <Loader />
                <Loader />
                <Loader />
            </div>
        )
    }

    if(isTrue===true){
        return (comics.map((comic) => <GridComics key={comic.id} comic={comic}/>))
    }
    return (comics.map((comic) => <ListComics key={comic.id} comic={comic}/>))
}