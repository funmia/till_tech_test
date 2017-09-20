function handleFiles(files) {
  var selectedFile = document.getElementById('input').files[0];
  var reader = new FileReader();
  reader.onload = function(e) {
    console.log(reader.result);
    data = JSON.parse(reader.result)
    shop = new Shop(data);
    console.log(shop);
  }
  reader.readAsText(selectedFile)

}
