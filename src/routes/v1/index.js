import express from 'express'
import { info } from '../../controllers/index.js'
import airplaneRoutes from '../../routes/v1/airplane.route.js'
import cityRoutes from '../../routes/v1/city.route.js'
import airportRoutes from '../../routes/v1/airport.route.js'
import flightRoutes from '../../routes/v1/flight.route.js'

const router = express.Router()

router.use('/airplanes', airplaneRoutes)
router.use('/cities', cityRoutes)
router.use('/airports', airportRoutes)
router.use('/flights', flightRoutes)
router.get('/info', info)

export default router
