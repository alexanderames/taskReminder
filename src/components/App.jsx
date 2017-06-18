import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder, deleteReminder, clearReminders } from '../actions';
import moment from 'moment';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ''
		}
	}

	addReminder() {
		console.log('this.state.dueDate', this.state.dueDate);
		this.props.addReminder(this.state.text, this.state.dueDate);
	}

	deleteReminder(id) {
		this.props.deleteReminder(id);
	}

	renderReminders() {
		const { reminders } = this.props;
		return (
			<ul className="collection">
				{
					reminders.map(reminder => {
						return (
							<li key={reminder.id} className="collection-item">
								<div className="list-item">
									<div>{reminder.text}</div>
									<div><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
								</div>
								<div
								className="list-item delete-button"
								onClick={() => this.deleteReminder(reminder.id)}
								>
								&#x2715;
								</div>
							</li>
						)
					})
				}
			</ul>
		)
	}

	render() {
		return (
			<div className="App">
				<div className="title">
					Task Reminder
				</div>
			<div className="row reminderForm">
				<div className="input-field inline">
					<input
						className="materialize-textarea"
						placeholder="I have to.."
						onChange={event => this.setState({text: event.target.value})}
					/>
					<input
					type="date"
					className="datepicker"
					onChange={event => this.setState({dueDate: event.target.value})}
					/>
				</div>
				<button
					type="button"
					className="waves-effect waves-teal btn-flat"
					onClick={() => this.addReminder()}
				>
					Add Reminder
				</button>
			</div>
				{ this.renderReminders() }
				<div
					className="btn-flat"
					onClick={() => this.props.clearReminders()}
				>
					Clear Reminders
				</div>
		</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		reminders: state
	}
}

export default connect(mapStateToProps, { addReminder, deleteReminder, clearReminders })(App);