describe("Car", function() {

  var Car;
  var $car;

  beforeEach(function setup() {
    $car = $("<div class='car car-one'></div>");
    $("body").append($car);

    Car = new RACEGAME.Car($car, "mycar", "assets/foo.png");
  });

  afterEach(function teardown() {
    $car.remove();
  });

  describe("move", function() {
    it("should move the car by 5px", function() {
      var originalPos = $car.position().left;
      Car.move();

      expect($car.css("left")).toEqual(originalPos + 5 + "px");
    });
  });

  describe("getPosition", function() {
    it ("should return the car's current position with the car's width offset", function() {
      var position = Car.getPosition();

      expect(position).toEqual($car.position().left + $car.width());
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

  describe("getPhotoURL", function() {
    it ("should return the asset url", function() {
      var url = Car.getPhotoURL();

      expect(url).toEqual("assets/foo.png");
    });
  });
});