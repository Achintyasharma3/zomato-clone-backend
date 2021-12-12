const Location = require('../Models/location');

exports.getLocations = (req, res) => {
   Location.find()
   .then(response => {
       res.status(200).json({message : "Locations Fetched Successfully", locations:response})
   })
   .catch(err => {
       res.status(500).json({ error: err })
   })
}