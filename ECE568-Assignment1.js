const data = [{a: 1}, {b: 2}, {a: 3}];
const propName = 'a';

// const pluck = data.map((item) => { 
//   if (item.hasOwnProperty('a')) {
//     return item.a;
//   }
// }).filter(notUndefined => notUndefined !== undefined);

const pluck = (propName) => {
  const value = data.map((item) => { 
    if (item.hasOwnProperty(propName)) {
      return item.a;
    }
  }).filter(notUndefined => notUndefined !== undefined);
  return value;
};

console.log(pluck(propName));
