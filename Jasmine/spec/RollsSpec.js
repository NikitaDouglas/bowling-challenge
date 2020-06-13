describe("rolls", function(){

  var rolls;

   beforeEach(function(){
     rolls = new Rolls();
   });

  it ("allows bowler to enter pins knocked on first roll", function(){
    expect(rolls.firstRoll(1)).toEqual(1)
  });

  it ("allows bowler to enter pins knocked on second roll", function(){
    expect(rolls.secondRoll(1)).toEqual(1)
  });
});
