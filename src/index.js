// import "./styles.css";

const getQueryKey = (key) => {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (decodeURIComponent(pair[0]) === key) return decodeURIComponent(pair[1]);
  }
  return null;
};

const Clients = getQueryKey("clients");
let ClientsData = localStorage.getItem("ClientsData");

if (Clients) {
  if (!ClientsData) {
    ClientsData = [Clients];
  } else {
    try {
      ClientsData = JSON.parse(ClientsData);
      if (ClientsData.indexOf(Clients) === -1) ClientsData.push(Clients);
    } catch (error) {
      console.log("Error parse: ", error);
    }
  }
  localStorage.setItem("ClientsData", JSON.stringify(ClientsData));
} else {
  ClientsData = [];
}
console.log({ClientsData})
// document.getElementById("app").innerHTML = `
// <h1>Test URLs</h1>
// <div>
  
// </div>
// `;

