const PORT = process.env.PORT || 5555;
let userInput = "";

export const inputObject = {
  js: "JAVASCRIPT",
  frontEnd: "FRONT-END",
  backEnd: "BACK-END",
  testing: "TESTING",
  db: "DATABASES",
  er: "EXTERNAL-RESOURCES",
};

function setJs() {
  userInput = inputObject.js;
}

function setFrontEnd() {
  userInput = inputObject.frontEnd;
}

function setBackEnd() {
  userInput = inputObject.backEnd;
}

function setTesting() {
  userInput = inputObject.testing;
}
function setDb() {
  userInput = inputObject.db;
}
function setEr() {
  userInput = inputObject.er;
}

export async function fetchResources() {
  // Make a HTTP GET request with the fetch method
  // HTTP METHOD: GET
  // Address: http://localhost:port
  // Header: Accept: application/json

  // Declare a variable to store the HTTP response

  const response = await fetch(
    `http://localhost:${PORT}/resources/${userInput}`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
  // If the request fails log out an error
  if (!response.ok) {
    console.error(`Status: ${response.status}`);
    console.error(`Text: ${await response.text()}`);
    return;
  }

  // Use the json method that parses the reponses body as JSON.
  const data = await response.json();

  // Log out our parsed data
  console.log(typeof data, data);
  return data;
}

// const jsbutton = document.getElementById("js icon"); do this for each icon
// jsbutton.addEventListener("click", function to set userInput to inputObject.js){
// topic1Location.textContent = javascript topic 1
// }; do this for each icon

// to do: list of functions to set each version of userInput to be specific topic
// eg: setJS(){ userInput = inputObject.js }

const jsButton = document.getElementById("UPDATE WITH JS ID");
const location1 = document.getElementById("UPDATE WITH LOCATION 1 ID");
const location2 = document.getElementById("UPDATE WITH LOCATION 2 ID");
const location3 = document.getElementById("UPDATE WITH LOCATION 3 ID");
const allLinkImages = document.getElementsByClassName(
  "UPDATE WITH ALL LINK IMAGE CLASS"
);

jsButton.addEventListener("click", async function () {
  setJs();
  await fetchResources();
  "UPDATE WITH LINK LOCATION 1 ID".textContent = data[0].name;
  "UPDATE WITH LINK LOCATION 2 ID".textContent = data[1].name;
  "UPDATE WITH LINK LOCATION 3 ID".textContent = data[2].name;
  "UPDATE WITH LINK LOCATION 1 ID".href = data[0].link;
  "UPDATE WITH LINK LOCATION 2 ID".href = data[1].link;
  "UPDATE WITH LINK LOCATION 3 ID".href = data[2].link;
});
