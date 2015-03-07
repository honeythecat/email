Email.EmailController = Ember.ObjectController.extend({
  actions: {
    deleteResponse: function(response) {
      if(confirm('Are you sure?')) {
        var email = this.get('model');
        email.get('responses').removeObject(response);
        email.save();
        response.destroyRecord();
      }
    },
    deleteEmail: function() {
      if(confirm('Are you sure?')) {
        var email = this.get('model');
        email.destroyRecord();
        this.transitionToRoute('emails');
      }
    },
    save: function() {
      var email = this.get('model');
      email.save();
    },
    saveResponse: function() {
      var response = this.get('model');
      response.save();
    },
    createResponse: function() {
      this.transitionToRoute("new-response")
    }
  }
});
