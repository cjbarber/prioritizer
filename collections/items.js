Items = new Meteor.Collection("Items");

Meteor.methods({
  item: function(itemAttributes) {
    var item = _.extend(_.pick(itemAttributes, 'name'), {
      points: 0,
      random: Math.random(),
      created: new Date().getTime()
    });

    item._id = Items.insert(item);

    return item._id;
  },
  randomItem: function(count) {
    var items = [];

    for (var i = 0; i < count; i++) {
      rand = Math.random();
      randomItem = Items.findOne({random: {$gte: rand}});
      if (randomItem === null) {
        randomItem = Items.findOne({random: {$lte: rand}});
      }
      items.push(randomItem);
    }
    return items;
  },
  removeAllItems: function() {
    Items.remove({});
  }
});