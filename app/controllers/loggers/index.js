import Ember from 'ember';

export default Ember.Controller.extend({
  init: function() {
    this._super();
    var socket = this.get('websockets').socketFor('ws://localhost:9099');
    socket.on('open', this.myOpenHandler, this);
    socket.on('message', this.myMessageHandler, this);
    socket.on('close', function() {
        console.log('closed');
    }, this);
  },
  message: '',

  myOpenHandler: function(event) {
    console.log('On open event has been called: ' + event);
  },

  myMessageHandler: function(event) {
    console.log('Message: ' + event.data);
    this.set('message', event.data);
  },

  actions: {
    sendButtonPressed: function() {
      var socket = this.get('websockets').socketFor('ws://localhost:9099');
      socket.send('Hello Websocket World');
    }
  }
});
