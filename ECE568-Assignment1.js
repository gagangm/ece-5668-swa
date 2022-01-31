const data = [{a: 1}, {b: 2}, {a: 3}];

const pluck = data.map((item) => { 
  if (item.hasOwnProperty('a')) {
    return item.a;
  }
}).filter(notUndefined => notUndefined !== undefined);

console.log(pluck);
