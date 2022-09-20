import { Router } from 'express'

// import the Todo data
import { skills } from '../data/skill-data.js'


const router = Router()

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('skills/index', {
    skills: skills
  })
})

// router.get('/', function(req, res) {
//   res.send('respond with a resource')
// })

export {
  router
}
