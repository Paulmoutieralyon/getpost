const express = require('express');
const router = express.Router();


router.get('/',(req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/forms-:id(101)',(req, res, next) => {
  console.log(req.query.level);
  console.log(req.params.id);
  res.send(`Use Postman and test route http://localhost:3000/forms-101?level=easy check console for GET !!!`);
});

router.post('/forms-:id(101)', (req, res, next) => {
  console.log(req.body);
  res.json(req.body);
});

module.exports = router;
