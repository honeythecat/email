Email.Email = DS.Model.extend({
  sender: DS.attr(),
  subject: DS.attr(),
  body: DS.attr(),
  responses: DS.hasMany('response', {async: true})
});
