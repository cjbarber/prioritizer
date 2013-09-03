if (Items.find().count() === 0) {

  for (var i = 0; i < 10; i++) {
    Items.insert({
      name: "Option " + i.toString(),
      random: Math.random(),
      points: 0,
      times_compared: 0
    });
  }
};