// import Ember from 'ember';

// export function formattedDate(params/*, hash*/) {
//   return params;
// }

// export default Ember.HTMLBars.makeBoundHelper(formattedDate);


/* global moment:true */

import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(date, format) {
  return moment(date).format(format);
});
