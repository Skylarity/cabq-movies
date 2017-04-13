import React, { Component } from 'react'
import turf from 'turf'
import Map from '../Map/map'
import GeoJSON from 'esri-to-geojson'
import './movie-map.scss'
import moviesESRI from '../../data/movies.json'

export default class MovieMap extends Component {

	constructor(props) {
		super(props)

		const movies = Object.assign(GeoJSON.fromEsri(moviesESRI), {
			"crs": {
				"type": "name",
				"properties": {
					"name": "urn:ogc:def:crs:OGC:1.3:CRS84"
				}
			}
		})

		console.log(movies)

		let moviesSource = {
			"type": "geojson",
			"data": movies
		}

		this.state = {
			mapboxProperties: {
				mapboxAccessToken: 'pk.eyJ1Ijoic2t5bGFyaXR5IiwiYSI6ImNpczI4ZHBmbzAwMzgyeWxrZmZnMGI5ZXYifQ.1-jGFvM11OgVgYkz3WvoNw',
				mapSetup: {
					style: 'mapbox://styles/mapbox/light-v9',
					center: [-106.6056, 35.0853],
					zoom: 11
				}
			},
			layers: [
				{
			        "id": "movies",
			        "type": "circle",
			        "source": moviesSource,
			        "paint": {
			        	"circle-radius": 5,
			        	"circle-color": "#6666ff"
			        }
			    }
			]
		}
	}

	render() {
		return (
			<Map mapboxProperties={this.state.mapboxProperties} layers={this.state.layers} />
		)
	}
}
