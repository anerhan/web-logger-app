import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    loading: function(transition, originRoute) {
      // displayLoadingSpinner();

      // substate implementation when returning `true`

      // console.log('========================');
      return true;
    },
    error: function(error, transition) {

      // Manage your errors
      // Ember.onerror(error);
      // alert('ACHTUNG!!!');
      // console.log('========================');
      // console.log(JSON.parse(error.responseText));
      // console.log('========================');
      // return this.transitionTo('bad_url')

      // substate implementation when returning `true`
      return true;

    }
  }
});
