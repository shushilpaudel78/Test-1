
const AddtoStorage = (id, name, price) => {
    const product = {id:id, name:name, price:price}
    let storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    storedProducts.push(product);
    localStorage.setItem('products', JSON.stringify(storedProducts));
    document.getElementById('cartCount').innerText = storedProducts.length;
}





