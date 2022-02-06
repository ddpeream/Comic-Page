import styled from "styled-components";
import { Link } from "react-router-dom";


export const Container = styled(Link)`
    display: grid;
    grid-template-columns: 1fr 2fr;
    justify-content: center;
    align-itmes: center;
    text-align: center;
    margin-bottom: 4%;
    margin-left: 13%;
    border-bottom: 1px solid black;
    width: 83%;
    padding-bottom: 3%;
    overflow:hidden;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
`
export const ImgContainer = styled.div`
    width: 100%;
    heigtht: 50%;
    position: relative;
    right: 14%;
`

export const Image = styled.img`
    width: 70%;
    heigtht: 50%;
    border: 2px solid black;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    bottom: 6%;
`

export const DateAdded = styled.p`
    color: #999;
    font-size: 16px;
    line-height: 20px;
`

export const Name = styled.p`
    text-align: center;
    margin-bottom: 0;
    color: #404040;
    font-size: 18px;
    font-weight: bold;
    line-height: 20px;
`