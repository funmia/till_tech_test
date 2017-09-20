describe('Order', function() {

  beforeEach(function(){
    order = new Order();
    item1 = "Flat White";
  });

  describe('Order', function(){
    it('has the customer name', function(){
      order.addName("Jane");
      expect(order.customerName()).toEqual("Jane")
    });

    it('checks if the item is available', function(){
      order.addItem(item1, 1)
      console.log(order.items());
      expect(order.items()).toContain(item1)
    });

  });
});
