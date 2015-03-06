Email.Router.map(function() {
  this.resource('emails', {path: '/'});
  this.resource('new-email');
  this.resource('email', {path: ':email_id'}, function() {
    this.resource('new-response')
  });

});
