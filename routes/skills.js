import { Router } from 'express'

// import the Todo data

import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

/* GET users listing. */
router.get('/', skillsCtrl.index)
router.get('/new', skillsCtrl.new)
router.get('/:id', skillsCtrl.show) 
router.post('/', skillsCtrl.create) 

// router.get('/', function(req, res) {
//   res.send('respond with a resource')
// })

export {
  router
}
