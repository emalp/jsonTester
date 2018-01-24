'use strict';

var expect = require('chai').expect;
var should = require('chai').should();
var chai = require('chai');
var chaiHttp = require('chai-http');
var path = require('path');
var fs = require('fs');

chai.use(chaiHttp);

var host = "http://localhost:3000";
var subPage = "/";

var requestFilePath = path.join(__dirname, '../../sample_request.json');
var requestFile = fs.readFileSync(requestFilePath, 'utf8');

describe("APP.js::bodyparser invalid json check:", function () {
    it("Should give out status of 400", function (done) {
        chai.request(host).post(subPage).set('content-type', 'application/json').send("Testing random non json input").end(function (error, response, body) {
            expect(response.statusCode).to.equal(400);
            done();
        });
    });
    it("The response should be JSON", function (done) {
        chai.request(host).post(subPage).set('content-type', 'application/json').send("Testing random non json input").end(function (error, response, body) {
            response.should.be.json;
            done();
        });
    });

    it("Response should contain an object error", function (done) {
        chai.request(host).post(subPage).set('content-type', 'application/json').send("Testing random non json input").end(function (error, response, body) {
            response.body.should.have.property('error');
            done();
        });
    });
});

describe("jsonChecker.js::Valid json response check: ", function () {
    it("Should return status 200 when posted sample_request.json from nine digital challenge", function (done) {
        chai.request(host).post(subPage).set('content-type', 'application/json').send(requestFile).end(function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it("Response shoud contain object response when fed sample_request.json", function (done) {
        chai.request(host).post(subPage).set('content-type', 'application/json').send(requestFile).end(function (error, response, body) {
            response.body.should.have.property('response');
            done();
        });
    });
});

describe("Invalid header request check.", function () {
    it("Should return proper status when invalid content-type header is sent.", function (done) {
        chai.request(host).post(subPage).set('content-type', 'plain/text').send(requestFile).end(function (error, response, body) {
            expect(response.statusCode).to.equal(400);
            done();
        });
    });

    it("Should return proper error object in JSON when invalid content-type header is sent.", function (done) {
        chai.request(host).post(subPage).set('content-type', 'plain/text').send(requestFile).end(function (error, response, body) {
            response.body.should.have.property('error');
            response.should.be.json;
            done();
        });
    });
});
//# sourceMappingURL=invalidJson.test.js.map
