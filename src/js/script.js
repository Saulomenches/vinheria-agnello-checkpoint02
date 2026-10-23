function verificarPreco(nomeVinho) {
  let quantidade = prompt("Quantas garrafas de " + nomeVinho + " você deseja?");

  let preco;

  if (nomeVinho == "Cabernet Sauvignon") {
    preco = 129.90;
  } else if (nomeVinho == "Merlot") {
    preco = 99.90;
  } else if (nomeVinho == "Syrah Gran Reserva") {
    preco = 149.90;
  } else if (nomeVinho == "Malbec Reserva") {
    preco = 119.90;
  } else if (nomeVinho == "Pinot Noir Reserva") {
    preco = 139.90;
  } else if (nomeVinho == "Chardonnay Reserva") {
    preco = 109.90;
  } else if (nomeVinho == "Sauvignon Blanc Reserva") {
    preco = 104.90;
  } else if (nomeVinho == "Rosé Reserva") {
    preco = 89.90;
  } else if (nomeVinho == "Espumante Brut") {
    preco = 129.90;
  } else if (nomeVinho == "Vinho do Porto Reserva") {
    preco = 159.90;
  }

  let total = preco * quantidade;

  alert(
    nomeVinho +
    "\nPreço: R$ " + preco.toFixed(2) +
    "\nQuantidade: " + quantidade +
    "\nTotal: R$ " + total.toFixed(2)
  );
}