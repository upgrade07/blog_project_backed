const express = require('express')

const bollywoodController = require('../component/bollywood')
const bollywoodRouter = express.Router()
bollywoodRouter.route('/category/bollywood').get(bollywoodController.bollywoodDetails)
module.exports = bollywoodRouter

const fitnessController = require('../component/fitness')
const fitnessRouter = express.Router()
fitnessRouter.route('/category/fitness').get(fitnessController.fitnessDetails)
module.exports = fitnessRouter

const foodController = require('../component/food')
const foodRouter = express.Router()
foodRouter.route('/category/food').get(foodController.foodDetails)
module.exports = foodRouter

const technologyController = require('../component/technology')
const technologyRouter = express.Router()
technologyRouter.route('/category/technology').get(technologyController.technologyDetails)
module.exports = technologyRouter

const tourismController = require('../component/tourism')
const tourismRouter = express.Router()
tourismRouter.route('/category/tourism').get(tourismController.tourismDetails)
module.exports = tourismRouter