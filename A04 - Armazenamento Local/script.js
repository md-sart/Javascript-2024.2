document.getElementById('gravar').addEventListener('click', function() {
    const nome = document.getElementById('nome').value;
    const endereco = document.getElementById('endereco').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;

    localStorage.setItem('nome', nome);
    localStorage.setItem('endereco', endereco);
    localStorage.setItem('email', email);
    localStorage.setItem('telefone', telefone);

    alert('Dados gravados com sucesso!');
});

document.getElementById('exibir').addEventListener('click', function() {
    const nome = localStorage.getItem('nome');
    const endereco = localStorage.getItem('endereco');
    const email = localStorage.getItem('email');
    const telefone = localStorage.getItem('telefone');

    if (nome || endereco || email || telefone) {
        document.getElementById('dados-armazenados').innerHTML = `
            <h3>Dados Armazenados:</h3>
            <p><strong>Nome:</strong> ${nome || 'Não informado'}</p>
            <p><strong>Endereço:</strong> ${endereco || 'Não informado'}</p>
            <p><strong>E-mail:</strong> ${email || 'Não informado'}</p>
            <p><strong>Telefone:</strong> ${telefone || 'Não informado'}</p>
        `;
    } else {
        document.getElementById('dados-armazenados').innerHTML = `<p>Nenhum dado encontrado.</p>`;
    }
});
