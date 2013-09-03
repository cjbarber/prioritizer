Template.itemsVs.helpers({
  items: function() {
    return Items.find({}, {sort: {times_compared: 1, random: 1}, limit: 2});
  }
});

Template.itemsVs.events({
  'click .reset-btn': function(e) {
    e.preventDefault();

    Meteor.call('removeAllItems');

    Meteor.Router.to('itemsPrep');
  }
});