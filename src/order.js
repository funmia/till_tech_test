(function(exports){
  function Order(){
    this._customerName = null;
    this._items = [];
  }

  Order.prototype.addName = function(name) {
    this._customerName = name;
  };

  Order.prototype.customerName = function() {
    return this._customerName;
  };

  Order.prototype.addItem = function(item, quantity) {
    this._items.push({item: quantity});
  };

  Order.prototype.items = function () {
    return this._items;
  };

  exports.Order = Order
})(this);
