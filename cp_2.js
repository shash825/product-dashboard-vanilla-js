function fetchProductsThen() {
    fetch("https://www.course-api.com/javascript-store-products")
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                console.log(product.fields.name);
            });
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
}

async function fetchProductsAsync() {
    try {
        const response = await fetch("https://www.course-api.com/javascript-store-products");
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        handleError(error);
    }
}

function displayProducts(products) {
    const productContainer = document.getElementById('product-container');

    products.slice(0, 5).forEach(product => {
        const { name, price, company } = product.fields;

        const card = document.createElement('div');
        card.classList.add('product-card');

        const productName = document.createElement('h2');
        productName.textContent = name;

        const productImage = document.createElement('img');
        productImage.src = image[0].url;
        productImage.alt = name;

        const productPrice = document.createElement('p');
        productPrice.textContent = `$${(price / 100).toFixed(2)}`;

        card.appendChild(productName);
        card.appendChild(productImage);
        card.appendChild(productPrice);

        productContainer.appendChild(card);
    });
}

function handleError(error) {
    console.error(`Error fetching products: ${error.message}`);
}