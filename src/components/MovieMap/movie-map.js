import React, { Component } from 'react'
import turf from 'turf'
import Map from '../Map/map'
import './movie-map.scss'
import movies from '../../data/movies.json'

export default class MovieMap extends Component {

	constructor(props) {
		super(props)

		// TODO: convert esri to geojson

		let moviesSource = {
			"type": "geojson",
			"data": {
			"type": "FeatureCollection",
				"features": [{
					"type": "Feature",
					"geometry": {
						"type": "Point",
						"coordinates": [-106.6056, 35.0853]
					}
				}]
			}
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
