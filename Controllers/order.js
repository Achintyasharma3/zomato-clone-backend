const orders = require('../Models/orders');

exports.postOrders = (req, res) =>{
    const {placedBy, placedByUserId , placedOn , items , amount , restaurantId} = req.body;
    const order =  new orders({
        placedBy,
        placedByUserId,
        placedOn,
        items,
        amount,
        restaurantId
    })

    order.save()
     .then(
         response => {res.status(200).json({message: "Updated", order : response});}
     )
     .catch(
         err => res.status(500).json({error:err})
     )
}

exports.getOrderByUserId = (req,res) =>{
    const {userId} = req.params;
    orders.find({placedByUserId:userId})
      .then(
          response => res.status(200).json({Message: "Fetched orders", Orders: response})
      )
      .catch(err => res.status(500).json({Error: err}))
}