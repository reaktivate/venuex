const router = require('next-routes')();

router.add('venue');
router.add('venue.events', '/venue/events', 'venue/events');
router.add('venue.events.add', '/venue/events/add', 'venue/events');
router.add('venue.events.view', '/venue/events/:id', 'venue/events');
router.add('host');

module.exports = router;
