Template.itemChoose.events({
  'click .item-btn': function(e) {
    e.preventDefault();

    var rand = Math.random();

    Items.update(this._id, {$inc: {
      points: 1, 
      times_compared: 1
    }, $set: {
      random: rand
    }}, function(error) {
      if (error) {
        alert(error.reason);
      } else {
        console.log("success");
      }
    });

    Meteor.Router.to('itemsVs');
  }
});