Email.NewResponseRoute = Ember.Route.extend({
  model: function(params) {
    var response = this.store.createRecord('response');
    return response;
  }
});
