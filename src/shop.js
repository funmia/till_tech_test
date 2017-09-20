(function(exports){
  function Shop(data){
    this._shopName = data[0].shopName
    this._address = data[0].address
    this._phone = data[0].phone
    this._prices = data[0].prices

  }
  Shop.prototype.getPriceList = function() {
    return this._info[0].prices[0];
  };

  exports.Shop = Shop;
})(this);
