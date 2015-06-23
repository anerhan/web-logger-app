import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    this.get('settings.appName'); // my-app
  }

});
