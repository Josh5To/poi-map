import { Component } from "react";
import { GOOG_KEY, FS_ID, FS_S } from './secret.js'

//add Foursquare places api id and secret here
const FourID = FS_ID
const FourSecret = FS_S
const FourURL = 'https://api.foursquare.com/v2/venues/explore'
const request = require('request');

    async function getPlaceData(url) {
        var res;
        const errorRes = await fetch(url).catch(error =>
            Promise.reject(new Error("Cannot fetch data from address"))
        );
        console.log("Sending request");
        const json = await errorRes.json().catch(() => {
            console.log("Server response error");
            return Promise.reject(new Error("Server response Error"));
        });

        if (json.status === "OK" || 200) {
            console.log(json.response.groups[0].items);
            res = json.response.groups[0].items;
            return res;
        }
    }

    async function urlBuilder(lt, long, q) {
        var query = q
        let url = `${FourURL}?client_id=${FourID}&client_secret=${FourSecret}&v=20180323&limit=5&ll=${lt},${long}&query=${query}`
        return getPlaceData(url);
    }

    /*async function reqBuilder(lt, long) {
        var formattedLL = lt.toString() + "," + long.toString()
        console.log(formattedLL)
        await request({
            url: 'https://api.foursquare.com/v2/venues/explore',
            method: 'GET',
            
            qs: {
                client_id: FourID,
                client_secret: FourSecret,
                ll: formattedLL,
                query: 'Hotels',
                v: '20180323',
                limit: 1,
            },
        },
        function(err, res, body) {
            if (err) {
                console.error("Invalid API URL! Contact dev with this code: 122840 (this means nothing)");
            } else {
                console.log(body);
            }
        }
        );
    }*/

    export default async function getPlaces(lat, long) {
        return urlBuilder(lat, long, "hotels")
    }