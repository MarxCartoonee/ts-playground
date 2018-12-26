class Data implements Test {
  private _data: string;
  private _moredata: string;

  constructor() {
    this._data = "This is data";
    this._moredata = "This is s'more data";
  }

  get data(): string {
    return this._data;
  }
}

interface Test {
  data: string;
}

const data = new Data();
const test = { data: "" } as Test;

(<any>Object).assign(test, data);

console.log(test);
