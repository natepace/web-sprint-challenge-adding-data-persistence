// build your `/api/resources` router here
const express = require('express')
const router = express.Router()
const Resources = require('./model.js')

router.get('/', (req, res) => {
    Resources.getResources()
        .then(resources => {

            res.status(200).json(resources)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.post('/', (req, res) => {
    Resources.createResource(req.body)
        .then(resource => {
            res.status(201).json(resource)
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })

})

module.exports = router