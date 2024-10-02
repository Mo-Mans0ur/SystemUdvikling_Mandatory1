console.log("Script loaded");

// Show/hide bulk amount field based on selection
document.getElementById("apiSelector").addEventListener("change", function () {
  const bulkOptions = this.value;
  if (bulkOptions === "multiple") {
    document.getElementById("bulkOptions").style.display = "block";
  } else {
    document.getElementById("bulkOptions").style.display = "none";
  }
});

// Fetch and display the generated person or people
document.getElementById("generatePersonButton").addEventListener("click", async function () {
  const apiType = document.getElementById("apiSelector").value;
  let apiUrl = "/api/person/full-info";

  if (apiType === "multiple") {
    const bulkAmount = document.getElementById("bulkAmount").value;
    apiUrl = `/api/bulk/${bulkAmount}`;
  }

  const res = await fetch(apiUrl);
  const data = await res.json();

  // Clear previous results
  document.getElementById("personDetails").innerHTML = "";

  if (Array.isArray(data)) {
    // Handle multiple people
    data.forEach((person) => {
      const personDiv = document.createElement("div");
      personDiv.innerHTML = `
        <hr/>
        <p><strong>Name:</strong> ${person.name} ${person.surname}</p>
        <p><strong>CPR:</strong> ${person.cpr}</p>
        <p><strong>Gender:</strong> ${person.gender}</p>
        <p><strong>Address:</strong> ${person.address.street}, ${person.address.number}, ${person.address.floor}, ${person.address.door}</p>
        <p><strong>Mobile:</strong> ${person.mobileNumber}</p>
      `;
      document.getElementById("personDetails").appendChild(personDiv);
    });
  } else {
    // Handle single person
    const personDiv = document.createElement("div");
    personDiv.innerHTML = `
      <p><strong>Name:</strong> ${data.name} ${data.surname}</p>
      <p><strong>CPR:</strong> ${data.cpr}</p>
      <p><strong>Gender:</strong> ${data.gender}</p>
      <p><strong>Address:</strong> ${data.address.street}, ${data.address.number}, ${data.address.floor}, ${data.address.door}</p>
      <p><strong>Mobile:</strong> ${data.mobileNumber}</p>
    `;
    document.getElementById("personDetails").appendChild(personDiv);
  }
});
