function calcularMultiplicacion() {
    
    let largo = document.getElementById('largo').value;
    let ancho = document.getElementById('ancho').value;
    let alto = document.getElementById('alto').value;

    
    let resultado = (Number(largo) * Number(ancho) * Number(alto)) * 50;


    document.getElementById('resultado').innerText = 'Frigorias/Hora: ' + resultado;
}

