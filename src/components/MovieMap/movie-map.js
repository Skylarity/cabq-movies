import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl'
import Map from '../Map/map'
import './movie-map.scss'

class MovieMap extends Component {

	constructor(props) {
		super(props)

		this.state = {
			mapboxProperties: {
				mapboxAccessToken: 'pk.eyJ1Ijoic2t5bGFyaXR5IiwiYSI6ImNpczI4ZHBmbzAwMzgyeWxrZmZnMGI5ZXYifQ.1-jGFvM11OgVgYkz3WvoNw',
				mapSetup: {
					style: 'mapbox://styles/mapbox/light-v9',
					center: [-106.6056, 35.0853],
					zoom: 11
				}
			}
		}
	}

	render() {
		return (
			<Map mapboxProperties={this.state.mapboxProperties} />
		)
	}
}

export default MovieMap
