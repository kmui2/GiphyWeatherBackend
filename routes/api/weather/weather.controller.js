import Weather from "./weather.model.js";

//Basic CRUD

// READ
// "get" - will grab all for display
export function get(req, res) {
  Weather.find({})
    .then(result => {
      return res.json(result);
    })
    .catch(err => {
      console.error(err);
      return res.status(500).send(err);
    });
}

// CREATE
// "add" - will create a new post
export function add(req, res) {

  let weather = new Weather({
    weather: req.body.weather,
    giphy: req.body.giphy,
    city: req.body.city
  });

  weather
    .save()
    .then(result => {
      return res.json(result);
    })
    .catch(err => {
      console.error(err);
      return res.status(500).send(err);
    });
}
