describe('calculateTaxes tests', function(){
    it('should calculate the high low bracket', function() {
        expect(calculateTaxes(10000)).toEqual(1500);
        expect(calculateTaxes(1000)).toEqual(150);
        expect(calculateTaxes(0)).toEqual(0);
    }) 
it('should calculate the high tax bracket', function() {
    expect(calculateTaxes(50000)).toEqual(12500);
    expect(calculateTaxes(100000)).toEqual(25000);
})
it('should calculate the high low bracket', function() {
    expect(calculateTaxes(10000)).toEqual(1500);
    expect(calculateTaxes(1000)).toEqual(150);
    expect(calculateTaxes(0)).toEqual(0);
})
it ('should reject invalid incomes', function() {
    console.log('working')
    expect(function() {calculateTaxes('asdlajn');}).toThrowError("This is not a number");
  
//it is important to use and arrow function here
})
})

describe('removeDupes tests', function(){
    it('should remove duplicates from an array', function(){
        expect(removeDupes([1,1,2,2,3,4])).toEqual([1,2,3,4])
        expect(removeDupes([1,2,3])).toEqual([1,2,3,])
        expect(removeDupes([1,2,3])).toBeInstanceOf(Array)
    })
    it('should remove duplicates from a string', function(){
        expect(removeDupes('hello')).toEqual('helo')
        expect(removeDupes('hello')).toBeInstanceOf(String)
        
    }) 
})

it('should remove value from array', function(){
    expect(remove([1,2,3,4,5,6], 6)).not.toContain(6)
})
