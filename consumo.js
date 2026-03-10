const url = "http://localhost:3000/produtos";

async function consumir() {//criou a função
    const response = await fetch(url);//criou a variável que recebe  a requisição dos dados que não estão prontos para leitura
    const data = await response.json(); // criou a variável que recebe dados tranformados em .json() que ficam legíveis
    
    const container = document.body; // a varíavel vai ser o elemnto pai

    // Limpa os campos iniciais (opcional)
    document.getElementById("pnome").innerHTML = "";
    document.getElementById("pvalor").innerHTML = "";

    // Exemplo: Criando elementos para cada produto da lista
    data.forEach(produto => { //criar o for each para cada um dos elementos do array; produto é o elemento mas pode chamar de qualquer nome 
        const p = document.createElement("p");//cria uma variável que recebe a criação de um elemento
        p.innerHTML = `<strong>${produto.produtonome}:</strong> : R$ ${produto.produtovalor}`;//esse é o que vai sair na variável quando ela for posta no elemento pai
        container.appendChild(p);//por a variável como elemento filho no elemento pai
    });
}

consumir();//chama a função













