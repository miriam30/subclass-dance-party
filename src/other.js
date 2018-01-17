var OtherDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  };
  OtherDancer.prototype = Object.create(Dancer.prototype);
  OtherDancer.prototype.constructor = OtherDancer;

  OtherDancer.prototype.step = function() {
   // call the old version of step at the beginning of any call to this new version of step
   Dancer.prototype.step.call(this);
   // toggle() is a jQuery method to show/hide the <span> tag.
   // See http://api.jquery.com/category/effects/ for this and
   // other effects you can use on a jQuery-wrapped html tag.
   this.$node.toggle();
  };



};

//  this.timeBetweenSteps = timeBetweenSteps;
//  this.$node = $('<span class="otherDancer"></span>');
//
//  this.step();
//
//  this.setPosition(top, left);
//
//
// };
//
// Dancer.prototype.step = function() {
//
//
//  setTimeout(this.step.bind(this), this.timeBetweenSteps);
// };
//
// Dancer.prototype.setPosition = function(top, left) {
//  var styleSettings = {
//    top: top,
//    left: left
//  };
//  this.$node.css(styleSettings);
// };
