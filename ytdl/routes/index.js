var express = require('express');
var fs = require('fs');
var ytdl = require('ytdl-core');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* 下載 */
router.get('/download', (req, res) => {
  /* youtube影片網址 */
  var url = req.query.url;
  var id = '';
  console.log("這是URL: " + url);
  for(i = 0; i < url.length; i++) {
    if(url[i] == '?') {
      c = i;
      break;
    }
  }
  for(i = c+3; i < url.length; i++) {
    id += url[i];
  }
  console.log("這是ID: " + id);
  /* ytdl-core */
  // ytdl(url, { filter: format => format.container === 'mp4' quality === '1080p'}).pipe(fs.createWriteStream('video.mp4'));
  ytdl(url).pipe(fs.createWriteStream('./download/ytdl-' + id + '.flv'));
  res.redirect('/');
});

module.exports = router;
