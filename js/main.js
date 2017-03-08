
var grid = new Muuri({
  container: document.getElementsByClassName('grid')[0],
  // Muuri does not convert a node list to array automatically
  // so we have to do it manually.
  items: []
});


//generateElements(20) is the number of images
grid.add(generateElements(20))
grid._settings.layout = ['firstFit', {
    horizontal:false,
    alignRight:false,
    alignBottom:false,
    fillGaps:true}];
grid.layout();


function generateElements(amount) {
    
    var ret = [];

    for (var i = 0, len = amount || 1; i < amount; i++) {

      // Generate item data.
      var imagepath = "";

      var width = getSize();

      // Generate item.
      var html = '<div class="item w' + width + '">' +
                    '<div class="item-content">' +
                        '<img class="gridimg" src="'+ imagepath +'"/>' +
                            i+ 
//        src="//img/MGB_inside.jpg"
          '</div>' +
                  '</div>';
      //document.getElementsByClassName('grid')[0].append(html);
      var item =  $(html).get(0);

      ret.push(item);

    }

    return ret;

}

function getSize() {
    
    i = Math.floor(Math.random() * 5) + 1;
    return i;
}