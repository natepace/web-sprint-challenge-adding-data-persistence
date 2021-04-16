// build your `/api/projects` router here
const express = require('express');
const router = express.Router();
const Projects = require('./model.js')

router.get('/', (req, res) => {
    Projects.getProjects()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.post('/', (req, res) => {
    Projects.createProject(req.body)
        .then(project => {
            project.project_completed ? project.project_completed = true : project.project_completed = false
            res.status(201).json(project)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

module.exports = router