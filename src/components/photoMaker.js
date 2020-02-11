import React from "react"
import styled from 'styled-components'

const PhotoMaker = props => {
    const PhotoOfTheDayDiv = styled.div`
        max-width: 70%;
        margin: 0 auto;
        color: white;
        border-left: 1px dashed white;
        border-right: 1px dashed white;
        background: dodgerblue;
        border-radius: 0px;
    `

    const PhotoOfTheDay = styled.img`
        max-width: 60%;
        border-radius: 25px;
        @keyframes pulse {
            from { transform: scale(1); }
            50% { transform: scale(1.05); }
            to { transform: scale(1); }
        }
        &:hover {
            opacity: .9;
            animation-name: pulse;
            animation-duration: 3s;
            animation-iteration-count: 15s;
        }
    `
    
    const PhotoOfTheDayDate = styled.p`
        font-size: 1vw;
    `

    const PhotoOfTheDayExplanation = styled.p`
        max-width: 80%;
        margin: 0 auto;
        font-family: calibri;
        padding-bottom: 5%;
        font-size: 1vw;
    `

    const PhotoOfTheDayTitle = styled.h2`
        padding-top: 5%;
    `

    return (
        <PhotoOfTheDayDiv>
            <PhotoOfTheDayTitle>{props.title}</PhotoOfTheDayTitle>
            <PhotoOfTheDay className="nasaPOTD_img" alt="NASA POTD" src={props.imgUrl}/>
            <PhotoOfTheDayDate>{props.date}</PhotoOfTheDayDate>
            <PhotoOfTheDayExplanation>{props.explanation}</PhotoOfTheDayExplanation>
        </PhotoOfTheDayDiv> 
    )
}

export default PhotoMaker