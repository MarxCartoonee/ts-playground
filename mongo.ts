namespace myMongo {
  declare type ArrayHashCallback = (v: {}, k: number) => {};

  const ObjectId = (
    m = Math,
    d = Date,
    h = 16,
    s = () => ((d.now() / 1000) | 0).toString(h),
    l = () => ((m.random() * h) | 0).toString(h),
    a = (v: ArrayHashCallback) =>
      Array.from({ length: h }, v)
        .join("")
        .toLowerCase()
  ) =>
    `${s()}${Array.from({ length: h }, l)
      .join("")
      .toLowerCase()}`;

  module.exports = {
    ObjectId
  };
}

// (
//   m = Math,
//   d = Date,
//   h = 16,
//   s = () => (d.now() / 1000 | 0).toString(h),
//   l = () => (m.random() * h) | 0).toString(h) => `${s()}${Array.from({ length: h }, () =>
//     ((m.random() * h) | 0).toString(h)
//   )
//     .join("")
//     .toLowerCase()}`
//     }

// const mongoObjectId = () => {
// var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
// return timestamp + Array.from({ length: 16 }, () => (Math.random() * 16 | 0).toString(16)).join('').toLowerCase();
// 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function() {
//     return (Math.random() * 16 | 0).toString(16);
// }).toLowerCase();
// };

// console.log(mongoObjectId());

// console.log(new ObjectId().value);
