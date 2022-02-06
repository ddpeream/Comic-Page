import { Container, Image, ImgContainer, DateAdded, Name } from "./GridComics.style"
import { useHistory } from "react-router-dom";


export default function GridComics (props) {

    
    const {name, issue_number, date_added, image, volume, api_detail_url, id } = props.comic
    const img = image.original_url
    const nameOri = volume.name

    console.log('ID: ', id)

    return (
        <Container to={{pathname: `/character/${id}`}}>
            <ImgContainer>
                <Image src={img} />
            </ImgContainer>
            <Name>{name}: {nameOri} #{issue_number}</Name>
            <DateAdded>{date_added}</DateAdded>
        </Container>
    )
}