function mostrarModal() {
    var modal = document.getElementById("mymodal");
    var overlay = document.getElementById("modalOverlay");
    modal.style.display = "flex";
    overlay.style.display = "flex";

    

   /* var teste = 'ABRIU O MODAL';

    console.log(teste);*/
}

function enviarForm(){
    var descricao = document.getElementById("desc").value;
    var tipo= document.getElementById("type").value;
    var responsavel = document.getElementById("resp").value;

    console.log(descricao);
    console.log(responsavel);
    console.log(tipo);
}

function escreonderModal(){
    var modal = document.getElementById("mymodal");
    var overlay= document.getElementById("modalOverlay");
    modal.style.display = ""
    overlay.style.display = ""
}