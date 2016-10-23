var express = require('express');
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

var app = express();

app.get('*', function(req, res){
    res.send('<html><head><title>Push-file</title><style>body {font-family: sans-serif; padding-top: 150px; font-size: 2em;}</style></head><body><center><h1>Push-file</h1><p>Upload test.</p></center></body></html>')    
});

app.post('/upload', upload.single('file'), function (req, res, next) {
    console.log('File upload: ')
    console.log('uploads/'+req.file.filename);
    console.log('---');
});

app.listen(80);