Template.itemsList.helpers({
  items: function() {
    return Items.find({}, {sort: {points: -1}});
  }
});