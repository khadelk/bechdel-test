import { c as create_ssr_component } from "../../chunks/index-76a30155.js";
function getRandomObjects(arr, n) {
  let newArr = [];
  let len = arr.length;
  while (n--) {
    let x = Math.floor(Math.random() * len);
    if (arr[x].bar !== null) {
      newArr = [...newArr, arr[x]];
    } else {
      n++;
    }
  }
  return newArr;
}
const Test = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let testArr = [
    { "foo": 1, "bar": 2 },
    { "foo": 3, "bar": null },
    { "foo": 5, "bar": 6 },
    { "foo": 7, "bar": null },
    { "foo": 9, "bar": 10 },
    { "foo": 11, "bar": null },
    { "foo": 13, "bar": 14 },
    { "foo": 15, "bar": null },
    { "foo": 17, "bar": 18 },
    { "foo": 19, "bar": null },
    { "foo": 21, "bar": 22 },
    { "foo": 23, "bar": null }
  ];
  console.log(getRandomObjects(testArr, 5));
  return ``;
});
export { Test as default };
