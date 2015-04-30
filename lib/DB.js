var update = require("react/lib/update");
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('mydb.sqlite');

function DB() {

}

module.exports = DB;


DB.prototype.init = function(cb) {
    db.serialize(function() {
        db.run("DELETE FROM images");
        //db.run("CREATE TABLE images (" +
        //        "id integer primary key autoincrement," +
        //        "caption TEXT," +
        //        "image_location TEXT" + ")");

        var stmt = db.prepare("INSERT INTO images (image_location) VALUES (?)");
        for (var i = 1; i < 17; i++) {
            if (i > 13) {
                stmt.run(i + '.JPG');
            }
            stmt.run(i + '.JPG');
        }
        stmt.finalize();

         db.each("SELECT * FROM images", function(err, row) {
              console.log(row);
          });
        cb();
    });
};


DB.prototype.getAll = function(cb) {
    db.all("SELECT * FROM images", function(err, rows) {
        cb(rows);
    });
};


DB.prototype.update = function(id, values, cb) {
    db.run("UPDATE images SET caption = ? WHERE id = ?", [values.caption, id], function(err, result) {
        cb(true);
    });
};
DB.prototype.remove = function(id, cb) {
    db.run("DELETE FROM images WHERE id = ?", [id], function(err, result) {
        cb(true);
    });
};