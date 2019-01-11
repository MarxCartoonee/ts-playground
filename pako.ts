namespace myPako {
  const pako = require("pako");
  const atob = require("atob");
  const readline = require("readline");

  const unzipToken = () => {
    return new Promise((resolve, reject) => {
      const rl = readline.createInterface(process.stdin, process.stdout);
      rl.setPrompt("Give me your token\n");
      rl.prompt();
      rl.on("line", (line: string) => {
        const TOKEN = line;
        const replace = TOKEN.replace(/-/g, "+").replace(/_/g, "/");
        const split = replace.split(".");
        const decoded = split.map(b => atob(b));

        console.log({ replace, split, decoded });

        try {
          const whatever = pako.inflate(decoded[1], { to: "string" });
          const token = JSON.parse(whatever);
          console.log({ token });
          resolve();
        } catch (ree) {
          console.error(ree);
          reject();
        } finally {
          // rl.close();
        }
      }).on("close", () => {
        console.log("Bye bye");
      });
    });
  };

  module.exports = {
    unzipToken
  };
}

// const GZIP =
//   "eyJhbGciOiJIUzUxMiIsInppcCI6IkdaSVAifQ.H4sIAAAAAAAAAKtWKi5NUrJScspPUqoFAFeQcd0NAAAA._sVpeCpoIxjC0kLhzNYv3I2OlUFcAdwCRrcnymZzh9fwCUP38ZhTMUK8D1 - q5RUFgEXzuuXE7wTPEANhlCB2bQ";

// const DEFLATE =
//   "eyJhbGciOiJIUzUxMiIsInppcCI6IkRFRiJ9.eNqqViouTVKyUnLKT1KqBQAAAP__.aFSN9mvH0Qwyb7eKFITyYxifkPrexINWPyhB8IF34RCuQ - w7hjBkun2z29lxlWSw5r56dQNOSj8spZgBMBITCQ";

// const UNICODE =
//   "eyJhbGciOiJIUzUxMiIsInppcCI6IkRFRiJ9.eNqqViouTVKyUjrcAoFKOkqZiSVKVoamJmYGBhYWRiY6SqkVBTABS3Mjk1oAAAAA__8.ghuu0RnahVcl8cqr_aufewRYBDIaDvbSFweAtlZaL3oe2A47ijf3mrb0qV2s6jnBSQk36_--knXNGbryPQrLbA";

// const UNAUTH =
//   "eyJhbGciOiJIUzUxMiIsInppcCI6IkRFRiJ9.eNpMjr1OxDAQhN9l6xRObJOfDoFEhThR0CAUrZN1sJTYlr0BBOLd8QF3umqlmW9m5wvybmAApsw1VOWmLY8xZI7B0wyDxTVTBWtYnB9dEUCbuW47MwvdWWNFZ62u29nqcxqniSIfw5z2kk1hJRieXyrYM6VTyUSzUX0ne12j6BTWvRRNU0pCWtC7T2QX_AXc2u4EN7q1ypqrAifKxGPEnN9DupiLftlxKW9hpoK5PG6Mvkxj90ZnDHd-Dcmxo_w3kN1GYWcYaiGKHePqpt8hRx-uD4f7u8dSd_tw8wQFd3hEtWqF7KVUFdBH_BeUaKT6_gEAAP__.8hpHhnj0sNoW4aCKZ8glTydRpzqbkgXcagpIC4yk7WaTccYsU0xUIyTSSgSWqejg6z8B8-ife77rzolWVetqhA";

// const RT = "ea8a4e5e50694a4692d4ba14567f5cb6";
