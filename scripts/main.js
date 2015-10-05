'use strict';
var React = require('react');
var Backbone = require('backbone');
window.$ = require('jquery');
window.jQuery = $;

var NavigationComponent = require('./components/NavigationComponent');
var HomeComponent = require('./components/HomeComponent');
var DashboardComponent = require('./components/DashboardComponent');
var LoginComponent = require('./components/LoginComponent');
var RegisterComponent = require('./components/RegisterComponent');
var LogOutComponent = require('./components/LogOut');
Parse.initialize('RxMepQLpuFxLifcJN3HKqsWsq6TCJrak7vqlXyci', 'XMlIcffIfaFBuSOb56L2DdXxLjmlTenVUtHkMFEq');

var app = document.getElementById('app');

React.render(
	<NavigationComponent />,
	document.getElementById('nav')
);

var Router = Backbone.Router.extend({
	routes: {
		'': 'home',
		'dashboard': 'dashboard',
		'login': 'login',
		'register': 'register',
		'logout': 'logout'
	},
	home: function() {
		React.render(<HomeComponent />, app);
	},
	dashboard: function() {
		console.log(Parse.User.current());
		if (Parse.User.current()) {
			React.render(<DashboardComponent />, app);
		} else {
			window.alert('You need to login or create an account');
			this.navigate('home', {trigger: true});
		}
	},
	login: function() {
		React.render(<LoginComponent router={r} />, app);
	},
	register: function() {
		React.render(<RegisterComponent router={r} />, app);
	},
	logout: function() {
		React.render(<LogOutComponent router={r} />, app);
	}
});

var r = new Router();
Backbone.history.start();