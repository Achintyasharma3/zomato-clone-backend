const express = require('express');

const route = express.Router();

const locationController = require('../Controllers/locations');
const mealTypeController = require('../Controllers/mealtypes');
const restaurantController = require('../Controllers/restaurants');
const menuItemsController = require('../Controllers/items');
const userController = require('../Controllers/user');
const orderController = require('../Controllers/order');
const paymentGatewayController = require('../Controllers/Paymentgateway');

route.get('/locations', locationController.getLocations);
route.get('/mealtypes', mealTypeController.getMealTypes);
route.get('/restaurants/:locId', restaurantController.getRestaurantsByLocation);
route.post('/filter', restaurantController.getrestaurantFilter);
route.get('/restaurant/:resId', restaurantController.getRestaurantDetailsById);
route.get('/menuitems/:resId', menuItemsController.getMenuItemsByResId);
route.post('/usersignup', userController.userSignUp);
route.post('/login', userController.userLogin);
route.post('/order', orderController.postOrders);
route.get('/order/:userId',orderController.getOrderByUserId);
route.post('/payment', paymentGatewayController.payment);
route.post('/callback', paymentGatewayController.callback);




module.exports = route;