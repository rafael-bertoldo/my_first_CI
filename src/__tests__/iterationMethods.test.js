import { newFilter, newFind, newMap, newReduce } from "../arrayMethods/iterationMethods.js";

const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrString = [
  "potato",
  "bread",
  "drumstick",
  "churros",
  "car",
  "tetris",
  "people",
];
const arrProd = [
  {
    name: "prod a",
    category: "x",
    price: 2,
  },
  {
    name: "prod b",
    category: "y",
    price: 2,
  },
  {
    name: "prod c",
    category: "z",
    price: 2,
  },
  {
    name: "prod d",
    category: "x",
    price: 2,
  },
];

let controller1 = 0;

let controller2 = "";

describe("testing newMap", () => {
  test("testing on a numeric array [1, 2, 3], causing all elements to be multiplied by 2 and expecting the return to be [2, 4, 6]", () => {
    expect(
      newMap([1, 2, 3], (elem, index, arr) => {
        return elem * 2;
      })
    ).toStrictEqual([1, 2, 3].map((e) => e * 2));
  });

  test("testing on a numeric array [1, 2, 3] and having it concatenate 'jest' to each element, expecting the return to be [1 jest, 2 jest, 3 jest]", () => {
    expect(
      newMap([1, 2, 3], (elem, index, arr) => {
        return elem + " Jest";
      })
    ).toStrictEqual([1, 2, 3].map((e) => e + " Jest"));
  });

  test("testing with empty array", () => {
    expect(
      newMap([], (elem, index, arr) => {
        return elem * 2;
      })
    ).toStrictEqual([].map((e) => e * 2));
  });
});

describe("testing newFilter", () => {
  test("testing on an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], and expecting the returned array to contain only the even numbers [2, 4, 6, 8, 10]", () => {
    expect(
      newFilter(arrNumbers, (elem, index, arr) => {
        return elem % 2 === 0;
      })
    ).toStrictEqual(
      arrNumbers.filter((elem, index, arr) => {
        return elem % 2 === 0;
      })
    );
  });

  test("testing on an array of strings ['potato','bread','coxinha','churros','car','tetris','person',], and expecting that the returned array contains only words with odd length ['bread', 'coxinha', 'churros', 'car']", () => {
    expect(
      newFilter(arrString, (elem, index, arr) => {
        return elem.length % 2 !== 0;
      })
    ).toStrictEqual(
      arrString.filter((elem, index, arr) => {
        return elem.length % 2 !== 0;
      })
    );
  });

  test("testing on an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], and hoping that the return array contains numbers less than or equal to 5 [1, 2, 3, 4, 5]", () => {
    expect(newFilter(arrNumbers, (e) => e <= 5)).toStrictEqual(
      arrNumbers.filter((e) => e <= 5)
    );
  });

  test("testing on an array of objects [{name: 'prod a', category: 'x', price: 2,}, {name: 'prod b', category: 'y', price: 2,}, {name: 'prod c', category: 'z', price: 2, }, { name: 'prod d', category: 'x', price: 2, },] where elements that have category x should be returned [{ name: 'prod a', category: 'x', price: 2 }, { name: 'prod d', category: 'x', price: 2 }]", () => {
    expect(newFilter(arrProd, (e) => e.category === "x")).toStrictEqual([
      {
        name: "prod a",
        category: "x",
        price: 2,
      },
      {
        name: "prod d",
        category: "x",
        price: 2,
      },
    ]);
  });

  test("testing on an empty array", () => {
    expect(newFilter([], (e) => e > 2)).toStrictEqual([]);
  });
});

describe("testing newFind", () => {
  test("testing on an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] where it should return the number 7", () => {
    expect(newFind(arrNumbers, (e) => e === 7)).toStrictEqual(
      arrNumbers.find((e) => e === 7)
    );
  });

  test("testing on an array of strings ['potato','bread','coxinha','churros','car','tetris','person'] where it should return the word 'churros'", () => {
    expect(newFind(arrString, (e) => e === "churros")).toStrictEqual(
      arrString.find((e) => e === "churros")
    );
  });

  test("testing on an array of objects [{name: 'prod a', category: 'x', price: 2,}, {name: 'prod b', category: 'y', price: 2,}, {name: 'prod c', category: 'z', price: 2, }, { name: 'prod d', category: 'x', price: 2, },] where the name element 'prod c' must be returned: {name: 'prod c', category: 'z', price: 2, }", () => {
    expect(newFind(arrProd, (e) => e.name === "prod c")).toStrictEqual(
      arrProd.find((e) => e.name === "prod c")
    );
  });

  test("testing when it doesn't find the element", () => {
    expect(newFind(arrProd, (e) => e.name === "prod r")).toStrictEqual(undefined);
  });

  test("testing on an empty array", () => {
    expect(newFind([], (e) => e === 3)).toStrictEqual(undefined);
  });
});

describe("testing newReduce", () => {
  test("testing on an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] expecting the return to be '55'", () => {
    expect(newReduce(arrNumbers, (acc, att) => acc + att)).toEqual(55);
  });

  test("testing on an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] starting the accumulator at 50 and expecting the return to be 105", () => {
    expect(newReduce(arrNumbers, (acc, att) => acc + att, 50)).toStrictEqual(
      105
    );
  });

  test("testing on an empty array", () => {
    expect(newReduce([], (acc, att) => acc + att, 0)).toStrictEqual(
      [].reduce((acc, att) => acc + att, 0)
    );
  });
});