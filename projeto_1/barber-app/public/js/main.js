document.getElementById('clientForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const clientData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value
    };

    fetch('/api/clients', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(clientData)
    })
    .then(response => response.json())
    .then(data => {
        alert('Cliente cadastrado com sucesso!');
        document.getElementById('clientForm').reset();
    })
    .catch(error => {
        console.error('Erro:', error);
    });
});

document.getElementById('viewClients').addEventListener('click', function() {
    fetch('/api/clients')
    .then(response => response.json())
    .then(data => {
        const clientList = document.getElementById('clientList');
        clientList.innerHTML = '';
        data.forEach(client => {
            const li = document.createElement('li');
            li.textContent = `Nome: ${client.name}, Email: ${client.email}, Telefone: ${client.phone}`;
            clientList.appendChild(li);
        });
    })
    .catch(error => {
        console.error('Erro:', error);
    });
});