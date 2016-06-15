import React from 'react';
import{Link} from 'react-router';

class HomePage extends React.Component {
	render(){
		return (
			<div className="Jumbotron">
				<h1>Testing react course</h1>
				<p>React redux and flux</p>
				<Link to="about" className="btn btn-primary btn-lg"></Link>
			</div>
			);
	}
}

export default HomePage;