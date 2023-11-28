const Router = require('express')
const router = new Router()
const magazineController = require('../controllers/controllers.js')

router.post('/user', magazineController.createMagazine)
router.get('/user', magazineController.getMagazine)
router.get('/user/:id', magazineController.getOneMagazine)
router.put('/user', magazineController.updateMagazine)
router.delete('/user/:id', magazineController.deleteMagazine)

module.exports = router