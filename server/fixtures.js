if (Items.find().count() === 0) {
  Items.insert({
    name: "An Option",
    points: 0
  });

  Items.insert({
    name: "Another option",
    points: 1
  });
};