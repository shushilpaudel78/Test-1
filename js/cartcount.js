const addButton = document.getElementById("addtocart");

// from product file 

const productName = document.getElementById('product_name')
const productPrice = document.getElementById('product_price');

// from checkout file
const checkId = document.getElementById("check_id");
const checkName = document.getElementById("check_name");

const checkPrice = document.getElementById("check_price");
const checkQuantity = document.getElementById("check_quantity");
const checkTotal = document.getElementById('check_total');

// from checkot file 



let count = 0;

// Function to increment the number
addButton.addEventListener ('click', () =>
    {
        count++; // Increment the number
        document.getElementById('cartCount').innerText = count; // Update the displayed number
    
        const checkidValue = checkId.textContent;

        const productnameValue = productName.textContent;
        checkName.innerText = productnameValue;


        localStorage.setItem('productName',productnameValue)




    
    }

)














