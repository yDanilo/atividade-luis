function adicionarItem() {
    var lista = document.getElementById("lista");

    var novoItem = document.createElement("li");
    novoItem.textContent = "Item X"; 

    lista.appendChild(novoItem);
}
