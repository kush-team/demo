import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("login");
  this.resource('reports', function() {
      this.route('index', {path : ''});
      this.route('new');
      this.route('edit', {
        path: ":report_id/edit",
      });
      this.route('show', {
        path: ":report_id/show",   		  
      })
      this.resource('questions', {
              path: '/'
      }, function() {
        this.route("index", {
          path: ':report_id/questions'
        });
        this.route('show', {
          path: ":report_id/questions/:question_id/show"
        });
        this.route('new', {
          path: ':report_id/questions/new'
        });  

        this.route('assign', {
          path: ':report_id/questions/:question_id/assign'
        });
      });   

      this.resource('answers', {
              path: ':report_id/questions/'
      }, function() {
        this.route("index", {
          path: ':question_id/answers'
        });
        this.route('show', {
          path: ":question_id/answers/:answer_id/show"
        });

        this.route('new', {
          path: ':question_id/answers/new'
        }); 
         
      });		
  });
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

      this.route("provinces", function() {
        this.route("new");
        this.route("edit", {
          path: ":province_id/edit"
        });
      });      

      this.route("parties", function() {
        this.route("new");
        this.route("edit", {
          path: ":party_id/edit"
        });
      });   
      this.route("ministries", function() {
        this.route("new");
        this.route("edit", {
          path: ":ministry_id/edit"
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
