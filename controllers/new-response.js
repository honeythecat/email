Email.NewResponseController = Ember.ObjectController.extend({
  needs: ['email'],
  actions: {
    saveResponse: function() {
      var response = this.get('model');
      response.save();
      var email = this.get('controllers.email.model');
      email.get('responses').pushObject(response);
      email.save();
      this.transitionToRoute('email', email.id);
    }
  }
});
