import React, { Component } from 'react';
import '../App.css'

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="title">
					Task Reminder
				</div>
			<div className="row">
				<div className="input-field inline">
					<input
						className="materialize-textarea"
						placeholder="I have to.."
					/>
				</div>
				<button
					type="button"
					className="waves-effect waves-teal btn-flat"
				>
					Add Reminder
				</button>
			</div>
		</div>
		)
	}
}

export default App;