// var fetch = require("node-fetch");
import fetch from "node-fetch"

// const uploadAssetURL = fetch("https://livepeer.studio/api/asset/import", {
//     method: "POST",
//     headers: {
//         Authorization: `Bearer ${process.env.APIKEY}`,
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//         url: "https://gateway.pinata.cloud/ipfs/QmeMkURDdEHTdCC5ZwEnBSQXmhsrErpCV2xy6xPnB3L2HN",
//         name: "Hero",
//     }),
// }).then((data) => {console.log(data)}).catch((err)=> {console.log(err)});

// uploadAssetURL();

const response = fetch("https://livepeer.studio/api/asset/{id}", {
  method: "GET",
  headers: {
    Authorization: `Bearer ${process.env.APIKEY}`,
    "Content-Type": "application/json",
  },
}).then((data) => {console.log(data)}).catch((err)=>{console.log(err)});

// const { status } = response.json();