import React from 'react';
import MapContainer from "../components/MapContainer";
import '../styles/containers/App.styl';

export default class App extends React.Component{

	constructor(){
		super();

		this.state ={
			dataFakeAPI : null
		}

	};

	componentDidMount(){

		this.getFakeAPI();
	};

	getFakeAPI(){

		fetch(`http://localhost:3000/locations`)
			.then(res=> res.json())
			.then(( res )=>{
				console.log('========',res)
					this.setState({
						dataFakeAPI:res
					})
			});
	}

	render(){

		let vDataFakeAPI = this.state.dataFakeAPI;

		return (
			<div className="App">
				{
					vDataFakeAPI?
						(<MapContainer data={ vDataFakeAPI } />)
						:(<div>Cargando desde la APpp class......</div>)
				}
			  
			</div>
		  )
	}
 
};