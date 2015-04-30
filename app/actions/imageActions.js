var request = require("superagent");

module.exports = {
    getAll: function( callback){
        request.get('/api/images/')
            .set("Accept", "application/json")
            .type("json")
            .end((err, res) => {
                if(err || !res) {
                    return callback([]);
                }

                if(res.status !== 200) {
                    //return callback(new Error("Request failed with " + res.status + ": " + res.text));
                    return callback([]);
                }

                if (res.body && res.body.results) {
                    return callback(res.body);
                }
            });
    },

    update: function(id, values, callback){ //debugger; return callback(true);
        request.post('/api/images/' + id)
            .set("Accept", "application/json")
            .type("json")
            .send(values)
            .end((err, res) => {
                if(err || !res) {
                    return callback(false);
                }

                if(res.status !== 200) {
                    //return callback(new Error("Request failed with " + res.status + ": " + res.text));
                    return callback(false);
                }

                if (res.body && res.body.result) {
                    return callback(res.body.result);
                }
            });
    },

    remove: function (id, callback){ //debugger; return callback(true);
        request.del('/api/images/' + id)
            .set("Accept", "application/json")
            .type("json")
            .end((err, res) => {
                if(err || !res) {
                    return callback(false);
                }

                if(res.status !== 200) {
                    //return callback(new Error("Request failed with " + res.status + ": " + res.text));
                    return callback(false);
                }

                if (res.body && res.body.result) {
                    return callback(res.body.result);
                }
            });
    }
}