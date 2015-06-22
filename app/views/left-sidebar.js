import Ember from 'ember';

export default Ember.View.extend({
  tagName: 'li',
  click: function() {
    // $("#wrapper").toggleClass("toggled");
    return false;
  }
});
