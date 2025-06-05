async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const users = await response.json();
        displayUsers(users);
    } catch (error) {
        document.getElementById('user-container').innerHTML = `<p>Error fetching data: ${error.message}</p>`;
    }
}

function displayUsers(users) {
    const container = document.getElementById('user-container');
    container.innerHTML = '';
    users.forEach(user => {
        container.innerHTML += `
            <div class="user-card">
                <h2>${user.name}</h2>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
            </div>
        `;
    });
}

fetchUsers();
