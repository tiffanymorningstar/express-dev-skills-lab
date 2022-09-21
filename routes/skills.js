import { Router } from 'express'

// import the Todo data

import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

/* GET users listing. */
router.get('/', skillsCtrl.index)

// router.get('/', function(req, res) {
//   res.send('respond with a resource')
// })

export {
  router
}
