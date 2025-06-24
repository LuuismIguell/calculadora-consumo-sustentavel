function calcularConsumo() {
  const horas = parseFloat(document.getElementById("horas").value);
  const potenciaNotebook = 0.05; // 50W = 0.05 kW

  if (isNaN(horas) || horas < 0) {
    alert("Digite um valor válido.");
    return;
  }

  const consumoMensal = potenciaNotebook * horas * 30; // kWh
  let dicas = "";

  if (consumoMensal <= 2) {
    dicas = "Muito bem! Seu consumo está baixo. Continue assim!";
  } else if (consumoMensal <= 4) {
    dicas = "Consumo razoável. Tente reduzir o tempo de uso ou desligar quando não estiver usando.";
  } else {
    dicas = "Alerta! Seu consumo está alto. Considere usar modos de economia de energia.";
  }

  document.getElementById("resultado").innerHTML = `
    Consumo Mensal Estimado: <strong>${consumoMensal.toFixed(2)} kWh</strong><br><br>
    💡 <em>${dicas}</em>
  `;
}
