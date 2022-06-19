// import React from "react";
// import MesaVerde from "./parks/MesaVerde";

// function ColoradoStateParks() {
//   return (
//     <div>
//       <MesaVerde />
//     </div>
//   );
// }

// export default ColoradoStateParks;

// import { trees, wildlife } from "./parks/RockyMountain";

// console.log(trees);
// // => "Aspen and Pine"

// wildlife();

// src/ColoradoStateParks.js
// import * as RMFunctions from "./parks/RockyMountain";

// console.log(RMFunctions.trees);
// // => "Aspen and Pine"

// RMFunctions.wildlife();
// // => "Elk, Bighorn Sheep, Moose"

// RMFunctions.elevation();
// // => Attempted import error

// import { trees, wildlife } from "./parks/RockyMountain";

// console.log(trees);
// // > "Aspen and Pine"

// wildlife();

// import {
//   trees as parkTrees,
//   wildlife as parkWildlife,
// } from "./parks/RockyMountain";

// console.log(parkTrees);
// // > "Aspen and Pine"

// parkWildlife();

// src/ColoradoStateParks.js
import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import * as RMFunctions from "./parks/RockyMountain";

export default function ColoradoStateParks() {
  return (
    <div>
      <MesaVerde />
    </div>
  );
}
