let fs = require('fs')

module.exports = (app) => {
    app.post('/upload_json', (req, response) => {
        let { report } = req.body;

        fs.readdir(__dirname + "/../reports", (err, files) => {

            fs.writeFile(__dirname + '/../reports/' + files.length + '.txt', report, (err) => {
                if (err) throw err
            });
        });
        response.send({ result: req.body });
        response.end();

    })


}