var express = require('express');
var router = express.Router();

var StartController = require('../controllers/start');

router.get('/', StartController.Index);
router.get('/play', StartController.Play);
router.get('/leaderboard', StartController.Leaderboard);
router.get('/death', StartController.Death);





module.exports = router;