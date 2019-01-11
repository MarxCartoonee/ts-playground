namespace index {
  const readline = require("readline");
  const mongo = require("./mongo");
  const pako = require("./pako");
  // class Data implements Test {
  //   private _data: string;
  //   private _moredata: string;

  //   constructor() {
  //     this._data = "This is data";
  //     this._moredata = "This is s'more data";
  //   }

  //   get data(): string {
  //     return this._data;
  //   }
  // }

  // interface Test {
  //   data: string;
  // }

  // const data = new Data();
  // const test = { data: "" } as Test;

  // (<any>Object).assign(test, data);

  // console.log(test);

  const rl = readline.createInterface(process.stdin, process.stdout);
  rl.setPrompt("What do you want to do today?\n");
  rl.prompt();
  rl.on("line", (line: Command) => {
    let waiting = Promise.resolve(null);
    switch (line.toLowerCase()) {
      case "exit":
      case "quit":
      case "q":
        rl.close();
        break;
      case "mongo":
        console.log(mongo.ObjectId());
        break;
      case "pako":
        waiting = pako.unzipToken();
        break;
      default:
        console.log(line);
        break;
    }
    waiting
      .then(() => {
        rl.prompt();
      })
      .catch(() => {
        rl.prompt();
      });
  }).on("close", () => {
    console.log("I am closing now for some reason");
    process.exit(0);
  });

  declare type Command = "exit" | "quit" | "q" | "mongo";
}
