import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route("login");

	this.resource('admin', function () {
	    this.route("users", function() {
	      this.route("new");

	      this.route("edit", {
	        path: ":user_id/edit"
	      });

	      this.route("show", {
	        path: ":user_id"
	      });
	    });

	    this.route("roles", function() {
	      this.route("new");
	      this.route("edit", {
	        path: ":role_id/edit"
	      });
	    });
	         
	    this.route("bricks", function() {
	      this.route("new");
	      this.route("edit", {
	        path: ":brick_id/edit"
	      });
	    });

	    this.route("ministries", function() {
	      this.route("new");
	      this.route("edit", {
	        path: ":ministry_id/edit"
	      });
	    });

		this.route("status-types", function() {
	      this.route("new");
	      this.route("edit", {
	        path: ":status_type_id/edit"
	      });
	    });   

		this.route("cameras", function() {
	      this.route("new");
	      this.route("edit", {
	        path: ":camera_id/edit"
	      });
	    });
  	});	
});

export default Router;