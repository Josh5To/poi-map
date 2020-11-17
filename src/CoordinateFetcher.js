import { Component } from "react";
import { GOOG_KEY } from './secret.js'

//add Google GEO api key here
const API_KEY = GOOG_KEY
const GOOGLE_API = "https://maps.google.com/maps/api/geocode/json";

    //Gets lat lang from address string,
    //Returns object :{lat, lang}
    async function getGeodata(url) {
        var res;
        const errorRes = await fetch(url).catch(error =>
            Promise.reject(new Error("Cannot fetch data from address"))
        );
        console.log("Sending request");
        const json = await errorRes.json().catch(() => {
            console.log("Server response error");
            return Promise.reject(new Error("Server response Error"));
        });

        if (json.status === "OK") {
            res = json.results[0].geometry.location;
            return res;
        }
    }

    async function urlBuilder(city) {
        var cit = city;
        let url = `${GOOGLE_API}?address=${encodeURIComponent(cit)}&key=${API_KEY}`;
        return getGeodata(url);
    
    }

    export default async function calcCoord(add) {
        return urlBuilder(add)
    }