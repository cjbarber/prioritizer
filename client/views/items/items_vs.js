Template.itemsVs.helpers({
  items: function() {
    var items_to_vs = Items.find({}, {sort: {times_compared: 1, random: 1}, limit: 2});
    return items_to_vs;
  }
});

Template.itemsVs.events({
  'click .reset-btn': function(e) {
    e.preventDefault();

    Meteor.call('removeAllItems');

    Meteor.Router.to('itemsPrep');
  }
});