export default Ember.View.extend({
  tagName: 'li',
  click: function(evt) {
    $("#wrapper").toggleClass("toggled");
    return false;
  }
});
