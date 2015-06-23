import Ember from 'ember';

export default Ember.Controller.extend({
    appName: 'My First Example',
    isToggledLeftSidebar: false,
    actions: {
      toggleLeftSidebar: function(){
        this.set('isToggledLeftSidebar', !this.get('isToggledLeftSidebar'));
      }
    }

});
