const fs = require("fs");

Main(process.argv);

function Main(args) {
  if (args.length > 2) {
    if (args[2] === "-d" && args.length > 3) {
      const day = parseInt(args[3]);
      if (!isNaN(day)) {
        const dayPath = `./days/day${day}.js`;
        if (fs.existsSync(dayPath)) {
          const dayModule = require(dayPath);
          dayModule.run();
        } else {
          console.log(`Day ${day} does not exist.`);
        }
      }
    }
  }
}
