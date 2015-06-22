import Ember from 'ember';
// import settings from '../../config/settings';

export default Ember.ArrayController.extend({
  init: function() {
    this._super();
    var socket = this.get('websockets').socketFor('ws://localhost:8080');
    socket.on('open', this.myOpenHandler, this);
    socket.on('message', this.myMessageHandler, this);
    socket.on('close', function() {
        console.log('closed');
    }, this);
  },
  messages: Ember.A([]),
  count: 0,
  // appName: settings.apiName,

  myOpenHandler: function(event) {
    var socket = this.get('websockets').socketFor('ws://localhost:8080');
    socket.send('{"type":"handshake","data":{"nickName":"DimiB","channelId":"room1","type":"msg","message":"Hello World"}}')
  },

  myMessageHandler: function(event) {
    console.log('Message: ' + event.data);
    var result = JSON.parse(event.data);
    if(result.t == 'msg'){
      this.messages.pushObject(atob(result.m));
      this.set('messages', this.messages.slice(-30));
      this.set('count', this.count + 1);
    }
  },

  actions: {
    sendButtonPressed: function() {
      var socket = this.get('websockets').socketFor('ws://localhost:8080');
      socket.send('{"type":"msg","data":"IOIOIOIOIOOOOOO"}');
    }
  }
});
