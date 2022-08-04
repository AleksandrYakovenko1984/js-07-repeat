const categories = document.getElementById("categories")
const items = document.querySelectorAll(".item")

items.forEach(item => {
    const h2 = item.querySelector("h2")
    const nodeItems = item.querySelectorAll('li');
    console.log(` - категория: ${h2.textContent} (количество элементов: ${nodeItems.length})`);
})

