import styled from "styled-components";
import { Link } from "react-router-dom";


export const Container = styled(Link)`
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    margin-bottom: 30%;
    outline: none;
    text-decoration: none;
`
export const ImgContainer = styled.div`
    width: 100%;
    heigtht: 100%;
    object-fit: cover;
`

export const Image = styled.img`
    width: 80%;
    heigtht: 80%;
    object-fit: cover;
    border: 2px solid black;
`

export const DateAdded = styled.p`
    color: #999;
    font-size: 16px;
    line-height: 20px;
`

export const Name = styled.p`
    width: 80%;
    margin-bottom: 0;
    color: #404040;
    font-size: 18px;
    font-weight: bold;
    line-height: 20px;
`