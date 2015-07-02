import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});


// Router.map(function() {
//   this.route('bad_url', { path: '/*badurl' })

//   // this.resource('users', function() {
//   //   this.resource('user', { path: '/:user_id/edit' });
//   // });

//   // this.resource('loggers', function() {
//   //   this.resource('logger', { path: '/:logger_id' });
//   // });

// });


Router.map(function() {
  this.resource('users', { path: '/users' }, function() {
    this.route('edit', { path: '/:user_id/edit' });
    this.route('new', { path: '/new' });
  });

  this.resource('loggers', function() {
    this.route('logger', { path: '/:logger_id' });
  });

});

export default Router;
