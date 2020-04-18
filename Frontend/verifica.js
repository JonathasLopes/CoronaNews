function validaMensage() {
    var form = document.getElementById("formSend");
    var name = form.name;
    var email = form.email;
    var mensage = form.mensagem;

    if (name.value == "" || name.value == null || name.value.length <= 2) {
        alert("Por favor, digite seu nome e seu sobrenome");
        form.name.focus();
        return false;
    }

    if (email.value.indexOf("@") == -1 ||
        email.value.indexOf(".") == -1 ||
        email.value == ""){
            alert("Por favor, digite um email para contato");
            form.email.focus();
            return false;
    }

    if(mensage.value == "" || mensage == null){
        alert("Por favor, digite sua mensagem para mim!");
        form.mensage.focus();
        return false;
    }
    
    return true;
}