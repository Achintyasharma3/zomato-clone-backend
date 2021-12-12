const Restaurants = require('../Models/restaurant');

exports.getRestaurantsByLocation = (req, res) => {
    const { locId } = req.params;
    Restaurants.find({ location_id: locId })
        .then(response => {
            res.status(200).json({ message: "Restaurants Fetched Succesfully", restaurants: response })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}

exports.getrestaurantFilter = (req, res) => {
    let { location, cuisine, mealtype, lcost, hcost, sort, page } = req.body;
    console.log(location);
    sort = sort ? sort : 1;
    page = page ? page : 1;

    const itemsPerPage = 3;
    let filterObj = {};

    const startIndex = page * itemsPerPage - itemsPerPage;
    const endIndex = page * itemsPerPage;

    location && (filterObj["location_id"] = location);
    cuisine && (filterObj["cuisine_id"] ={ $in: cuisine});
    mealtype && (filterObj["mealtype_id"] = mealtype);
    lcost && hcost && (filterObj["min_price"] = { $lte: hcost, $gte: lcost});

    Restaurants.find(filterObj).sort({ min_price: sort })
        .then(response => {
            let pageArr = [];
            for (var i = 1; i <= Math.ceil(response.length / itemsPerPage); i++) {
                pageArr.push(i);
            }
            const filteredRestaurants = response.slice(startIndex, endIndex);
            res.status(200).json({ message: "Restaurants Fetched Succesfully", restaurants: filteredRestaurants, pageCount: pageArr, totalRestaurants: response.length })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}

exports.getRestaurantDetailsById = (req, res) => {
    const { resId } = req.params;

    Restaurants.findById(resId)
        .then(response => {
            res.status(200).json({ message: "Restaurant Fetched Succesfully", restaurant: response })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })

}