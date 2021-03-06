import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl'
import './map.scss'

export default class Map extends Component {

	constructor(props) {
		super(props)

		this.state = {
			mapSetup: this.props.mapboxProperties.mapSetup,
		}
	}

	componentDidMount() {
		this.setState({
			mapSetup: Object.assign(this.props.mapboxProperties.mapSetup, {container: this.mapDiv})
		})
		mapboxgl.accessToken = this.props.mapboxProperties.mapboxAccessToken
		this.map = new mapboxgl.Map(this.state.mapSetup)

		this.map.on('load', () => {
			this.props.layers.map(layer => {
				this.map.addLayer(layer)
			})
		})
	}

	render() {
		return (
			<div id="map" ref={(div) => { this.mapDiv = div }}></div>
		)
	}
}
