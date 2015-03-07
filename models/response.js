Email.Response = DS.Model.extend({
  responder: DS.attr(),
  re: DS.attr(),
  responsething: DS.attr(),
  email: DS.belongsTo('email', {async: true})
});
