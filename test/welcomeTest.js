const assert = require('chai').assert;
const app = require('../app');


//Definisi assert 
//Cara assert menggunakan chai
describe('App', function(){
    it('app should return welcome message', function(){
        assert.equal(app(), "welcome to QA course at mySkill")
    })
})