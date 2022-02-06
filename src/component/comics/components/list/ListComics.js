import { Container, Image, ImgContainer, DateAdded, Name, TextContainer } from "./ListComics.style"

export default function ListComics (props) {

    const {name, issue_number, date_added, image, volume, id } = props.comic
    const img = image.original_url
    const nameOri = volume.name

    console.log('ID: ', id)

    return (
        <Container to={{pathname: `/character/${id}`}}>
            <ImgContainer>
                <Image src={img} />
            </ImgContainer>
            <TextContainer>
                <Name>{nameOri} #{issue_number}-{name}</Name>
                <DateAdded>{date_added}</DateAdded>     
            </TextContainer>      
        </Container>
    )
}