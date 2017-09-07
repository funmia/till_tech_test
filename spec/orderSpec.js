describe('Order', function() {

  beforeEach(function(){
    order = new Order();
  });

  describe('Order', function(){
    it('has the customer name', function(){
      order.addName("Jane");
      expect(order.customerName).toEqual("Jane")
    });

  });

});
