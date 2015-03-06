Email.Router.map(function() {
  this.resource('inbox', {path: '/'});
  this.resource('email', {path: 'email_id'}, function() {
    this.resource('new-email')
  });

});
