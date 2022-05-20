const router = require('express').Router();
const animalRoutes = require('./routes/apiRoutes/animalRoutes.js');
const zookeeperRoutes = require('./routes/apiRoutes/zookeeperRoutes.js');

router.use(animalRoutes);
router.use(zookeeperRoutes);

module.exports = router;
