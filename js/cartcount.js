const addButton = document.getElementById("addtocart");

const productName = document.getElementById("product_name");

const checkName = document.getElementById("check_name");






let count = 0;

// Function to increment the number
addButton.addEventListener ('click', () =>
    {
        count++; // Increment the number
        document.getElementById('cartCount').innerText = count; // Update the displayed number
         
        localStorage.setItem('countNumber', count)



        const pName = productName.textContent;
        localStorage.setItem('productName', pName);

        // pName.innerHTML = checkName;



    
    
    }

)














