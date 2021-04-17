const express = require('express');
const promotionRouter = express.Router();
const promotionId = 'promotionId';

promotionRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the promotions to you');
})
.post((req, res) => {
    res.end(`Will add the promotions: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})
.delete((req, res) => {
    res.end('Deleting all promotions');
});

promotionRouter.route('/:promotionId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

.get((req, res) => {
  res.end(`Will send all the promotions: ${req.params[promotionsId]} to you`);
})
.post((req, res) => {
  res.write(` Updating the promotions: ${req.params[promotionId]}`)
  res.end(`Will add the promotions: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
  res.statusCode = 403;
  res.end(`PUT operation not supported on /promotions: ${req.params[promotionsId]}`);
})
.delete((req, res) => {
  res.end('Deleting all promotions');
});

module.exports = promotionRouter;