const {
  getRectanglePerimeter,
  getRectangleArea,
  getRectangleInfo,
} = require("../js/rectangle.js");

test("should return proper perimeter of the rectangle", () => {
  const result = getRectanglePerimeter(2, 3);
  expect(result).toBe(10);
});

test("should return proper area of the rectangle", () => {
  const result = getRectangleArea(2, 3);
  expect(result).toBe(6);
});

test("should return proper perimeter of the rectangle", () => {
  const consoleSpy = jest.spyOn(console, "log");

  getRectangleInfo(2, 3);
  expect(consoleSpy).toBeCalledWith(
    `The perimeter of a rectangle is 10 and the area is 6`
  );
});
