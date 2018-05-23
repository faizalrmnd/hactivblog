const chai = require('chai')
const chaiHttp = require('chai-http')
const should = chai.should()
const app = require('../app')
const mongoose = require('mongoose')
chai.use(chaiHttp)

describe('article', function () {

  it('should list all articles', function (done) {
    console.log('masuk')
    this.timeout(5000)
    chai
      .request(app)
      .get('/article')
      .end(function(err, res){
        res.status.should.equal(200)
        res.body.should.have.property('data')
        res.body.data.should.be.an('array')
        res.body.data[0].should.be.an('object')
        res.body.data[0].should.have.property('title')
        res.body.data[0].should.have.property('content')
        res.body.data[0].should.have.property('category')
        res.body.data[0].should.have.a.property('author')
        done()
      })
  })

  it('should create an article', function(done) {
    chai
      .request(app)
      .post('/article/post')
      .send({
        title:'judul saya', 
        content: 'something'
      })
      .end(function(err, res){
        res.status.should.equal(201)
        res.body.should.have.property('data')
        res.body.should.have.property('message').equal('successfully added a new article !')
        res.body.data.should.be.an('object')
        res.body.data.should.have.property('author')
        res.body.data.should.have.property('title')
        res.body.data.should.have.property('content')
      })
      done()
  })

  after(function(done){
    mongoose.connection.db.dropCollection('articles', function(err, response){
      console.log('collection successfully dropped')
      done()
    })
  })

})