const userTableBody = document.getElementById("userTableBody");
const searchInput = document.getElementById("searchInput");

let users = [];

// Fetch users from API
async function fetchUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    users = await res.json();
    renderUsers(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    userTableBody.innerHTML = "<tr><td colspan='3'>Failed to load users.</td></tr>";
  }
}

// Render users to table
function renderUsers(list) {
  userTableBody.innerHTML = "";
  if (list.length === 0) {
    userTableBody.innerHTML = "<tr><td colspan='3'>No users found.</td></tr>";
    return;
  }

  list.forEach(user => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.company.name}</td>
    `;

    userTableBody.appendChild(tr);
  });
}

// Filter users by name
searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = users.filter(user => user.name.toLowerCase().includes(query));
  renderUsers(filtered);
});

// Initialize
fetchUsers();
