var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="nav-wrapper">
				<a href="#" className="brand-logo left">Login Example</a>
				<ul id="nav-mobile" className="right">
					<li><a href="#">Home</a></li>
					<li><a href="#dashboard">Dashboard</a></li>
					<li><a href="#login">Login</a></li>
					<li><a href="#register">Register</a></li>
					<li><a href="#logout">Logout</a></li>
				</ul>
			</div>
		);
	}
})