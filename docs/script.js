(function(){

  var path = null;

  var objects = [];

  var onKeyBoardDown = ({ keyCode }) => {
    console.log(String.fromCharCode(keyCode));
    const obj = new Path.Circle({
      center: [ 80, 180 ],
      radius: 10,
      fillColor: "red"
    })
    paper.view.draw();
  };

  // Only executed our code once the DOM is ready.
  paper.install(window);
  window.onload = function() {
    // Get a reference to the canvas object
    var canvas = document.getElementById('musicBoard');
    // Create an empty project and a view for the canvas:
    paper.setup(canvas);
    // Create a Paper.js Path to draw a line into it:
    path = new paper.Path();

    // Give the stroke a color
    path.strokeColor = 'white';
    var start = new paper.Point(100, 100);
    // Move to start and draw a line from there
    path.moveTo(start);
    // Note that the plus operator on Point objects does not work
    // in JavaScript. Instead, we need to call the add() function:
    path.lineTo(start.add([ 200, -50 ]));
    // Draw the view now:
    paper.view.draw();
  }

})();
