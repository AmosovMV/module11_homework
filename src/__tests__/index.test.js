// import { countDown } from "../index.js";

// describe("test countDown", () => {
//    it("countDown 5 ", () => {
//      const result = countDown(5);
//      expect(result).toBe(5 4 3 2 1);
//    }),
//      it("countDown 9 ", () => {
//      const result = countDown(9);
//      expect(result).toBe(9 8 7 6 5 4 3 2 1);
//    });
//  });

const countDown = require('../index.js');

test("countDown 5", ()=>{
  const result = countDown(5)
  expect(result).toBe(5);
});