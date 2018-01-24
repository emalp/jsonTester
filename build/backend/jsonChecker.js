'use strict';

var express = require('express');
var router = express.Router();

router.post('/*', (req, res) => {
    prepareResponse(req, res).then(responseArray => {
        res.setHeader('content-type', 'application/json');
        var result = JSON.stringify({ response: responseArray });
        res.send(result, null, 3);
    }).catch(err => {
        console.log("Error in JSON, catching and returning proper error json.");
        var JsonErr = JSON.stringify({ error: "Could not decode request: JSON parsing failed" });
        res.setHeader('content-type', 'application/json');
        res.status(400).send(JsonErr, null, 3);
    });
});

const prepareResponse = (req, res) => {
    return new Promise((resolve, reject) => {

        var payload = req.body.payload;
        var keyPayloadsLength = Object.keys(payload).length;
        var responseArray = [];

        for (var payloadLength = 0; payloadLength < keyPayloadsLength; payloadLength++) {
            if (payload[payloadLength].drm === true && payload[payloadLength].episodeCount > 0) {
                var okJsonObject = {
                    image: payload[payloadLength].image.showImage,
                    slug: payload[payloadLength].slug,
                    title: payload[payloadLength].title
                };
                responseArray.push(okJsonObject);
            }
        }
        resolve(responseArray);
    });
};

module.exports = router;
//# sourceMappingURL=jsonChecker.js.map
