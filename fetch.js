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

const jsButton = document.getElementById("js-logoID");
const location1 = document.getElementById("resource1-linkID");
const location2 = document.getElementById("resource2-linkID");
const location3 = document.getElementById("resource3-linkID");
const allLinkImages = document.getElementsByClassName(
  "UPDATE WITH ALL LINK IMAGE CLASS"
);

jsButton.addEventListener("click", async function () {
  setJs();
  await fetchResources();
  location1.textContent = data[0].name;
  location2.textContent = data[1].name;
  location3.textContent = data[2].name;
  location1.href = data[0].link;
  location2.href = data[1].link;
  location3.href = data[2].link;
});
