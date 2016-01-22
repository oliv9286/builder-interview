describe("Car", function() {

  var Car;
  var $car;

  beforeEach(function setup() {
    $car = $("<div class='car car-one'></div>");
    $("body").append($car);

    Car = new RACEGAME.Car($car, "mycar");
  });

  afterEach(function teardown() {
    $car.remove();
  });

  describe("move", function() {
    it ("should move the car 5px over to the right", function() {

      var originalPos = $car.offset().left;
      Car.move();
    });
  });

  describe("getPosition", function() {
    it ("should return the car's current position with the car's width offset", function() {
      var position = Car.getPosition();

      expect(position).toEqual($car1.offset().left + $car1.width();
    });
  });

  describe("getName", function() {
    it ("should return the name of the current car", function() {
      var name = Car.getName();

      expect(name).toEqual("mycar");
    });
  });

  describe("getEntity", function() {
    it ("should return the jQuery element of the current car", function() {
      var entity = Car.getEntity();

      expect(entity).toEqual($car);
    });
  });
});