var DB = require("./DB");

module.exports = function(app){

    var db = new DB();

    app.get("/api/init", function(req, res) {
		db.init(function(){

            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({
                result: true
            }));
        });
	});

	app.get("/api/images/", function(req, res) {

		db.getAll(function(rows){

            rows.map(function(item){
                item.path = '/images/' + item.image_location;
            })

            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({
                results: rows
            }));
        });
	});

    app.post("/api/images/*", function(req, res) {
        var image_id = req.params[0];
        if (image_id && req.body) {
            db.update(image_id, {caption: req.body.caption}, function(result) {
                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify({
                    result: result
                }));
            });
        } else {
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({
                result: false
            }));
        }
	});

    app.delete("/api/images/*", function(req, res) {
        var image_id = req.params[0];
        if (image_id) {
            db.remove(image_id, function(result) {
                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify({
                    result: result
                }));
            });
        }
	});
};