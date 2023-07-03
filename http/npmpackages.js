const package_=require('lodash');
const array=[1,[2,[3,[4,[5]]]]];
const new_array=package_.flattenDeep(array);
console.log(new_array)
