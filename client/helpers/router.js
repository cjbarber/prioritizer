Meteor.Router.add({
  '/': 'itemsPrep',
  '/vs': 'itemsVs',
  // '/vs/:_id1/:_id2': {
  //   to: 'itemsVs',
  //   and: function(id1) { Session.set('itemOneId', id1); },
  //   and: function(id2) { Session.set('itemTwoId', id2); },
  // }
});