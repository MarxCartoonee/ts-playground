class ObjectId {
  public value: string;

  constructor() {
    this.value = `${Math.floor((Date.now() / 1000) | 0).toString(
      16
    )}${Array.from({ length: 16 }, () =>
      ((Math.random() * 16) | 0).toString(16)
    )
      .join("")
      .toLowerCase()}`;
  }
}

// const mongoObjectId = () => {
// var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
// return timestamp + Array.from({ length: 16 }, () => (Math.random() * 16 | 0).toString(16)).join('').toLowerCase();
// 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function() {
//     return (Math.random() * 16 | 0).toString(16);
// }).toLowerCase();
// };

// console.log(mongoObjectId());

console.log(new ObjectId().value);
