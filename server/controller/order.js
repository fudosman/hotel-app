const fs = require("fs");

exports.continental =  (req, res) => {
  fs.readFile("./availables/continentalDishes.json", "utf-8", (err, data) => {
      if (err) {
        res.status(400).send(err);
        return
      }
      let tempdata = JSON.parse(data);
      res.status(200).send(tempdata);
  });
};

exports.hotSpicy =  (req, res) => {
  fs.readFile("./availables/hotSpicy.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return
    }
    let tempdata = JSON.parse(data);
    res.status(200).send(tempdata);
});
};

exports.otherSelections =  (req, res) => {
  fs.readFile("./availables/otherSelections.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return
    }
    let tempdata = JSON.parse(data);
    res.status(200).send(tempdata);
});
}

exports.pastries =  (req, res) => {
  fs.readFile("./availables/pastries.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return
    }
    let tempdata = JSON.parse(data);
    res.status(200).send(tempdata);
  })
};

exports.specialBreakfast =  (req, res) => {
  fs.readFile("./availables/specialBreakfast.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return
    }
    let tempdata = JSON.parse(data);
    res.status(200).send(tempdata);
});
};

exports.localDishes =  (req, res) => {
  fs.readFile("./availables/localDishes.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return
    }
    let tempdata = JSON.parse(data);
    res.status(200).send(tempdata);
});
};
