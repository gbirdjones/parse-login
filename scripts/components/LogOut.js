var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="container">
				<div className="row">
					<h1>Are you sure you want to log out?</h1>
					<button onClick={this.logout}>confirm</button>
				</div>
			</div>
			);
	},
	logout: function () {
	Parse.User.logOut();
	this.props.router.navigate('login', {trigger: true});
	}
})