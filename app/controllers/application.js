import Ember from 'ember';

export default Ember.Controller.extend({
  isToggledLeftSidebar: false,
  actions: {
    toggleLeftSidebar: function(){
      this.set('isToggledLeftSidebar', !this.get('isToggledLeftSidebar'));
    }
  }
});
