Email.Lot = DS.Model.extend({
  sendter: DS.attr(),
  subject: DS.attr(),
  body: DS.attr(),
  dateSent: DS.attr()
});
