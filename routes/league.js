const express = require('express'),
    router = express.Router();

const listOfChamps = [
    {name: 'Veigar', type: 'Mage'},
    {name: 'Riven', type: 'Warrior'},
    {name: 'Lee Sin', type: 'Assassin'},
    {name: 'Pyke', type: 'Assassin'},
    {name: 'Thresh', type: 'Support'}
]


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('template', {
        locals: {
            title: 'LoL',
            listOfChamps: listOfChamps
        },
        partials: {
            partial: 'partial-league'
        }
    });
});

module.exports = router;