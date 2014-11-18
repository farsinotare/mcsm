var stream = require('stream');
var fs = require('fs');
var trumpet = require('trumpet');
var through = require('through');
var marked = require('marked');
var concat = require('concat-stream');
var gm = require('gm');


var ss = require('stream-stream');
var outStream = ss();

var index = concat(function(data) {

console.log(data);
//  data.forEach(function(s) {
 //   outStream.write(s);
 // });
 // outStream.end();
 // outStream.pipe(process.stdout);

});


var findit = require('findit')('./photos');
var streams = [];
i = 0;
findit.on('file', function(file, stat) {
  var entry = '<img src="thumbs/thumb_' + i + '.jpg" />';
  i++;
  index.write(entry);

  gm('./' + file)
    .background('black')
    .resize(420, 420)
    // .extent(320, 320)
    // .crop(70, 160, 20, 0)
    .noProfile()
    .write('./resized/thumb_' + i + '.jpg', function (err) {
      if (err) { console.log(err) }
      else {};
    });
});

findit.on('end', function() {
  index.end();
});


