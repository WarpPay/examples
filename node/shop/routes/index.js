var express = require('express');
var router = express.Router();

/*
  This is the mock data used to populate the website. We have a list
  of items with IDs, and different ways of billing, in order to
  demonstrate the capabilities of Warp's payment functionality.
*/
const mockData = {
  items: [
    {
      id: 'item_13po390391',
      name: "lorem (women's, medium)",
      description: "This is fantastic for the turtles in your life. Buy now and deliver at 7:38pm next Tuesday.",
      imageUrl: "https://picsum.photos/200?blur",
    },
    {
      id: 'item_23109u310j',
      name: "2x ipsum, slightly worn",
      description: "Get a lovely present for those you care about. Order two ipsums, now.",
      imageUrl: "https://picsum.photos/200?blur",
    },
    {
      id: 'item_331e0i31k3',
      name: "brand new dolor (sit amet)",
      description: "What is the gift for the man, woman, or human entity who has everything? What better than a dolor - now SIT AMET!!",
      imageUrl: "https://picsum.photos/200?blur",
    },
  ]
}

// GET /
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Example Shop', layout: 'index', items: mockData.items });
});

// GET /items/:id
router.get('/items/:id', function (req, res, next) {
  const item = mockData.items.find(({ id }) => id === req.params.id)

  res.render('index', { title: item.name, layout: 'item', item });
});


module.exports = router;
