Template.itemsAdd.events({
  'submit form': function(e) {
    e.preventDefault();

    var $name = $(e.target).find('[name=name]');
    var item = {
      name: $name.val()
    }

    Meteor.call('item', item, function(err, itemId) {
      if (err) {
        throwError(err.reason);
      } else {
        $name.val('');
      }
    });
  }
});