const url = "http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees";

async function getapi(url) {
  const response = await fetch(url);

  // Storing data in form of JSON
  var data = await response.json();
  console.log("API DATA", data);
  show(data);
}

getapi(url);

function show(data) {
  let tab = `<tr>
                <th>Name</th>
                <th>ID</th>
                <th>Created At</th>
            </tr>`;

  // Loop to access all rows
  for (let r of data) {
    tab += `<tr> 
        <td>${r.name} </td>
        <td>${r.id}</td>
        <td>${r.createdAt}</td>        
    </tr>`;
  }

  document.getElementById("employees").innerHTML = tab;
}
