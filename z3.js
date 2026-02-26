const products = [
    { product: 'Телефон', price: 50000 },
    { product: 'Ноутбук', price: 120000 },
    { product: 'Наушники', price: 7000 },
    { product: 'Мышка', price: 3000 }
];

function getAverage(items) {
    if (items.length === 0) return 0;
    const totalSum = items.reduce((acc, item) => acc + item.price, 0);
    return totalSum / items.length;
}
const sred = getAverage(products);
console.log(`Средняя цена товаров: ${sred} руб.`);