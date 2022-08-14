const assert = require('chai').assert;
const app = require('../app');


//Definisi assert 
//Cara assert menggunakan chai
describe('App', function(){
    //Assert tulisan sesuai ekspektasi
    it('app should return welcome message', function(){
        assert.equal(app(), "welcome to QA course at mySkill")
    })

    //Assert tipe data
    it('app data type is string', function(){
        let response = app();
        assert.typeOf(response,'string')
    })
})