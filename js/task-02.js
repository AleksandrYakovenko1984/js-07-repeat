const orderList = document.getElementById("ingredients")

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

ingredients.map(item => {
    const order = document.createElement("li")
    order.textContent = item
    console.log(order);
    return orderList.append(order)
})
