const Mealtype = require('../Models/mealtype');

exports.getMealTypes = (req, res) => {
   Mealtype.find()
   .then(response => {
       res.status(200).json({message : "Mealtype Fetched Successfully", mealtype:response})
   })
   .catch(err => {
       res.status(500).json({ error: err })
   })
}