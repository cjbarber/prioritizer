Items = new Meteor.Collection("Items");

Meteor.methods({
  item: function(itemAttributes) {
    var item = _.extend(_.pick(itemAttributes, 'name'), {
      points: 0,
      created: new Date().getTime()
    });

    item._id = Items.insert(item);

    return item._id;
  }
});