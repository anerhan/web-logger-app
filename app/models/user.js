import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string'),
  position: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  meta: DS.attr('string'),
  password: DS.attr('password'),
  password_confirmation: DS.attr('password_confirmation'),
  fullName: function(){
        return this.get('firstName')+" "+this.get('lastName');
    }.property('firstName', 'lastName'),
  ability: function() {
      return JSON.parse(this.get('meta')).ability.join(' | ');
  }.property('meta')

});
