import React, {useEffect, useState} from "react";
import axios from "axios";
import moment from "moment";


import PhotoMaker from "./photoMaker"

export default function PhotoGrid() {
    const [photo, setPhoto] = useState([])
    const [yesterdayPhoto, setYesterdayPhoto] = useState([])

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=U3r45ePOG0sMq4e305FfBR7e5JnFxLLaJ3NPXKdW')
        .then(response => {
            const nasaPOTD = response.data;
            console.log(nasaPOTD)
            setPhoto(nasaPOTD)
        })
    }, [])

    useEffect(() => {
        let yesterdayDate = moment().subtract(1, 'days').format('YYYY-MM-DD')
        console.log(yesterdayDate)

        axios.get(`https://api.nasa.gov/planetary/apod?api_key=U3r45ePOG0sMq4e305FfBR7e5JnFxLLaJ3NPXKdW&date=${yesterdayDate}`)
        .then(response => {
            const nasaYesterdayPOTD = response.data;
            console.log(nasaYesterdayPOTD)
            setYesterdayPhoto(nasaYesterdayPOTD)
        })
    }, [])

    return (
        <div className="container">
            <PhotoMaker key={photo.date} title={photo.title} imgUrl={photo.hdurl} explanation={photo.explanation} date={photo.date} />
            <PhotoMaker key={yesterdayPhoto.date} title={yesterdayPhoto.title} imgUrl={yesterdayPhoto.hdurl} explanation={yesterdayPhoto.explanation} date={yesterdayPhoto.date} />
        </div>

    )
}

