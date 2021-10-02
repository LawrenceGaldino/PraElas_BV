const Calc = require("./cart.json");

let num = Calc.items;

// 3. imprimir o nome de cada produto do cart
for (let i = 0; i < num.length; i++) {
  console.log(
    "Compra: ",
    num[i].title,
    "\n Quantidade: ",
    num[i].quantity,
    "\n Preço: R$",
    num[i].price
  );
}

// 1 calcular a quantidade de produtos no objeto cart
let quant = num.reduce((acc, current) => acc + current.quantity, 0);
console.log("Quantidade total adquirido: ", quant);

// 2 somar o valor total do cart
let total = num
  .map((item1) => item1.quantity * item1.price)
  .reduce((acc, current) => acc + current, 0);
console.log("total dos itens: R$", total);
