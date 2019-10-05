import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends React.Component{

	constructor(props){
		super(props);

		this.state ={
			showMap : true,
			vDataFakeAPI :this.props.data
		}

		//console.log('0000isddisndnsknds===',this.props.data);
	};

	changeStatusMap =(e ) =>{

		this.setState({
			showMap: this.state.showMap?false:true
		});
	};

	ShowButton(){

		const title = this.state.showMap?'Ocultar ':'Mostar ';

		return (<button type="button" style={{display:'inline'}} onClick={ this.changeStatusMap }>{`${title} Mapa`}</button>);
	};

	render(){

		const vSHowMap = this.state.showMap?'inline':'none';
		const test = this.props.test
		return (
			<React.Fragment>
				{ this.ShowButton() }
				<div
					style={{display:vSHowMap}}
				>{}
					<Map
						google={google}
						zoom={4}
						initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
						style={{width: '80%', height: '80%', position: 'relative'}}
					>{

						this.state.vDataFakeAPI.map( (index)=>{

							const lati = index.venueLat;
							const long = index.venueLon;
							const vTitle = index.venueName;

							return (
								<Marker
							position={{ lat: lati, lng: long }}
							title={ vTitle}
						/>
							)
						})
					}
						

					</Map>
				</div>
				
			</React.Fragment>
		);
	}
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);