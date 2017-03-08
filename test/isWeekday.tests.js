describe('The isWeekday function', function(){

    it('should return false correctly', function(){
        assert.equal(false,isWeekday('Sunday'));
    });
    it('should return true  correctly', function(){
        // this test will fail - can you fix it?
        assert.equal(true,isWeekday('tuesday'));

    });
});
