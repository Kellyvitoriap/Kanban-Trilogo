function mostrarModal() {
    var modal = document.getElementById("mymodal");
    var overlay = document.getElementById("modalOverlay");
    modal.style.display = "block";
    overlay.style.display = "block"
}
function esconderModal(){
    var modal = document.getElementById("mymodal");
    var overlay= document.getElementById("modalOverlay");
    modal.style.display = ""
    overlay.style.display = ""
}