Email.Response = DS.Model.extend({
  sender: DS.attr(),
  re: DS.attr(),
  body: DS.attr(),
  email: DS.belongsTo('email', {async: true})
});
