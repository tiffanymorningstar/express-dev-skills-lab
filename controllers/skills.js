import { Skill } from '../models/skill.js'



function index(req, res) {
  Skill.find({})
  .then(skills => { // todos represents the result of the query, in this case ALL todos
    res.render('skills/index', {
      skills: skills,
    })
  })
  .catch(error => { // If there's an error, console.log it and redirect back home!
    console.log(error)
    res.redirect('/')
  })
}

function newTodo(req, res) {
  res.render('todos/new')
}

export {
  index,
  newToDo as new,
}
