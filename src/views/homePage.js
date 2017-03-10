import React from 'react'

var d = new Date()
var year = d.getFullYear()

var homePage = React.createClass({

	getInitialState: function() {
		return {
			date: year,
			position: 'stop'
		}
	},

	_startPast: function() {
		this.state.date -= 1
		this.setState({
			date: this.state.date
		})
	},

	_stop: function() {
		this.setState({
			date: this.state.date
		})
		clearInterval(this.past)
		clearInterval(this.future)
	},

	_startFuture: function() {
		this.state.date += 1
		this.setState({
			date: this.state.date
		})
	},

	_goHome: function() {
		this.setState({
			date: year
		})
		clearInterval(this.past)
		clearInterval(this.future)
	},

	_decrease: function() {
		this.past = setInterval(this._startPast, 500)
	},

	_increase: function() {
		this.future = setInterval(this._startFuture, 500)
	},

	render: function() {
		return (
			<div className="homePage">
				<h1>{this.state.date}</h1>
				<h2>Back to the Time Machine</h2>
					<div className="navBar">
						<button className='past' onClick={this._decrease}>PAST</button>
						<button className='stop' onClick={this._stop}>OH GOD MAKE IT STOP</button>
						<button className='future' onClick={this._increase}>FUTURE</button>
						<div className="home">
							<button className='home' onClick={this._goHome}>return to present time</button>
						</div>
					</div>
			</div>
		)
	}
})

export default homePage