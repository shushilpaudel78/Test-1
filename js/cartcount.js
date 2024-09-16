
// For save data in local storage and add number of cart in nav 

const AddtoStorage = (id, name, price) => {
    const product = { id: id, name: name, price: price }
    let storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    storedProducts.push(product);
    localStorage.setItem('products', JSON.stringify(storedProducts));
    document.getElementById('cartCount').innerText = storedProducts.length;


    let productNames = storedProducts.map(product => product.name).join(', ');
    document.getElementById('check_name').innerText = productNames;


}
























