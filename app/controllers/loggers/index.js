import Ember from 'ember';

export default Ember.Controller.extend({
  init: function() {
    this._super();
    var socket = this.get('websockets').socketFor('ws://localhost:8080');
    socket.on('open', this.myOpenHandler, this);
    socket.on('message', this.myMessageHandler, this);
    socket.on('close', function() {
        console.log('closed');
    }, this);
  },
  logs: Ember.A([]),
  count: 0,
  myOpenHandler: function() {
    var socket = this.get('websockets').socketFor('ws://localhost:8080');
    var msg = '{"type":"handshake","data":{"nickName":"DimiB","channelId":"room1","type":"msg","message":"Hello World"}}';
    socket.send(msg);
  },

  myMessageHandler: function(event) {
    console.log('Message: ' + event.data);
    var result = JSON.parse(event.data);
    if(result.t === 'msg'){
      this.set('count', this.count + 1);
      this.logs.pushObject(this.count + ': ' + atob(result.m));
      this.set('logs', this.logs.slice(-300));
      // this.view.scrollTop();
      // $('.logger-area').animate({ scrollTop: 20000 }, 5000);
      // this.get('view').send('scrollTop');

    }
  },

  actions: {
    sendButtonPressed: function() {
      var socket = this.get('websockets').socketFor('ws://localhost:8080');
      socket.send('{"type":"msg","data":"IOIOIOIOIOOOOOO"}');
    }
  }
});
