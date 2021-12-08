const countDown = require('../index.js');
 
describe("test countDown", () => {
    it("countDown 5 ", () => {
      expect(countDown(5)).toStrictEqual([5, 4, 3, 2, 1]);
    }),
    it("countDown 2 ", () => {
      expect(countDown(2)).toStrictEqual([2, 1]);
    }),
    it("countDown 1 ", () => {
      expect(countDown(0)).toStrictEqual([]);
    });
});

xdescribe("test countDown faled", () => {
    it("countDown 0 ", () => {
      const result = countDown(0);
      expect(result).toStrictEqual([0]);
    });
});

describe("unit test fot function countDown", () => {
  const arr = [5, 4, 3, 2, 1];
  const negNum = -5;
  const notNum = "hi";
  it("correct output count", () => {
    expect(countDown(5)).toStrictEqual(arr);
  }),
    it("negative number input", () => {
      expect(countDown(negNum)).toBe("Отрицательное число");
    }),
    it("Not a number", ()=>{
      expect(countDown(notNum)).toBe('Не число');
    });
});