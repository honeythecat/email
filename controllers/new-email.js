Email.NewEmailController = Ember.ObjectController.extend({
  actions:{
    save: function() {
      var newEmail = this.store.createRecord('email', {
        sender: this.get('sender'),
        subject: this.get('subject'),
        body: this.get('body')
      });
      newEmail.save()
      this.transitionToRoute('emails');
    }
  }
});
