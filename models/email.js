Email.Email = DS.Model.extend({
  sender: DS.attr(),
  subject: DS.attr(),
  body: DS.attr(),
  resonses: DS.hasMany('response', {async: true})
});
