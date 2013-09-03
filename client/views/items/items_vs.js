Template.itemsVs.helpers({
  items: function() {
    var items_to_vs = Items.find({}, {sort: {times_compared: 1, random: 1}, limit: 2});
    // Easier way to prevent most repeat comparisons. Just re-randomize them.
    items_to_vs.forEach(function (item) {
      Items.update(item._id, {
        random: Math.random()
      });
    });
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