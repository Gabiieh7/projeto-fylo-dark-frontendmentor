function conferirInput() {
    if (document.querySelector('.input').value == '') {
        document.querySelector('.mensage-invalid').classList.add('visivel');
    }else{
        document.querySelector('.mensage-invalid').classList.remove('visivel');
    }
}