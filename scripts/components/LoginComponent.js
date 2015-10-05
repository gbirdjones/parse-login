var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="container">
				<div className="row">
					<h1>Login</h1>
					<form onSubmit={this.onLogin}>
						<input type="text" className="textInput" ref="email" placeholder="email"></input>
						<input type="password" className="textInput" ref="password" placeholder="password"></input>
					
					<div className="row">
							<button className="waves-effect waves-light btn">Register</button>
					</div>
					</form>
				</div>
			</div>
		);
	},
		onLogin: function (e) {
			e.preventDefault();
			console.log(Parse.User.current());
			Parse.User.logIn(
					this.refs.email.getDOMNode().value ,
				 	this.refs.password.getDOMNode().value,
				{
  					success: (user) => {
   					console.log(user);
   					this.props.router.navigate('dashboard', {trigger: true});
   				},
  					error: (user, error) => {
    				this.setState({
						error: error.message
					});
  				
  			}
  		});
		}
	});
  