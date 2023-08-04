function calcularSoma() {
  
    const notap1 = parseFloat(document.getElementById("notap1").value);
    const notap2 = parseFloat(document.getElementById("notap2").value);
  

    const resultado = (notap1 + (notap2 * 2)) / 3;
     
    const resultadoCerto = parseFloat(resultado.toFixed(2));
  
    // Mostrar o resultado
    document.getElementById("resultado").innerText = ` ${resultado.toFixed(2)}`;
  }