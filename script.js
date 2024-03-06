function calcularSoma() {
  
    const notap1 = parseFloat(document.getElementById("notap1").value );
    const notap2 = parseFloat(document.getElementById("notap2").value );
   

    const resultado = notap1 + (notap2 * 2) / 3;
     
    const resultadoCerto = parseFloat(resultado.toFixed(2));
  
    document.getElementById("resultado").innerText = ` ${resultado.toFixed(2)}`;
    
    document.getElementById("notap1").value = "";
    document.getElementById("notap2").value = "";

  const placeholder1 = document.getElementById("notap1");
  const placeholder2 = document.getElementById("notap2");

  if(resultado < 5){
    placeholder1.placeholder = "Nota da P2";
    placeholder2.placeholder = "Nota da P3";
    }
    else{
      placeholder1.placeholder = "Nota da P1"
      placeholder2.placeholder = "Nota da P2"
    }
  };
