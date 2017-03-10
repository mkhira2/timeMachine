import React from 'react'

// define year
var d = new Date()
var year = d.getFullYear()

var homePage = React.createClass({

	// inital state is static current year
	getInitialState: function() {
		return {
			date: year,
			position: 'stop'
		}
	},

	// called by _decrease, decreases year by 1
	_startPast: function() {
		this.state.date -= 1
		this.setState({
			date: this.state.date
		})
	},

	// stops year counter
	_stop: function() {
		this.setState({
			date: this.state.date
		})
		clearInterval(this.past)
		clearInterval(this.future)
	},

	// called by _increase, increases year by 1
	_startFuture: function() {
		this.state.date += 1
		this.setState({
			date: this.state.date
		})
	},

	// returns displayed year to current year
	_goHome: function() {
		this.setState({
			date: year
		})
		clearInterval(this.past)
		clearInterval(this.future)
	},

	// decreases year every .5 seconds; past is button class name
	_decrease: function() {
		this.past = setInterval(this._startPast, 500)
	},

	// increases year every .5 seconds; future is button class name
	_increase: function() {
		this.future = setInterval(this._startFuture, 500)
	},

	// bringing it all to the user
	render: function() {
		return (
			<div className="homePage">
				<h2>Back to the Time Machine</h2>
				<h1>{this.state.date}</h1>
					<div className="navBar">
						<div>
							<button className='past' onClick={this._decrease}>PAST</button>
							<p>relive your mistakes</p>
						</div>
						<div>
							<button className='stop' onClick={this._stop}>STOP</button>
							<p>oh god make it stop</p>
						</div>
						<div>
							<button className='future' onClick={this._increase}>FUTURE</button>
							<p>look to the future</p>
						</div>
						</div>
						<div className="home">
							<button className='home' onClick={this._goHome}>return to home time</button>
							<p>this isnt kansas anymore</p>
					</div>
			</div>
		)
	}
})

export default homePage