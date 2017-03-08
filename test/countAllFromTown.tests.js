describe('The countAllFromTown function', function(){

    it('should return true for reg startswith CY', function(){
        assert.equal(false, regCheck('CY 254'));
    });
    it('should return false for reg !startswith CY', function(){
        // this test will fail - can you fix it?
        assert.equal(false, regCheck('CY'));

    });
});
