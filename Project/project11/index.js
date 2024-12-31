// script.js

// Sample Products Data
const products = [
    { id: 1, name: "Smartphone", category: "Electronics", price: 500, size: "M" },
    { id: 2, name: "T-shirt", category: "Clothing", price: 20, size: "L" },
    { id: 3, name: "Laptop", category: "Electronics", price: 1200, size: "M" },
    { id: 4, name: "Sofa", category: "Furniture", price: 700, size: "" },
    { id: 5, name: "Jeans", category: "Clothing", price: 40, size: "S" },
  ];
  
  // Elements
  const productContainer = document.getElementById("productContainer");
  const categoryFilter = document.getElementById("categoryFilter");
  const minPriceInput = document.getElementById("minPrice");
  const maxPriceInput = document.getElementById("maxPrice");
  const applyPriceFilterButton = document.getElementById("applyPriceFilter");
  const sizeFilters = document.querySelectorAll(".sizeFilter");
  
  // Display Products
  function displayProducts(filteredProducts) {
    productContainer.innerHTML = ""; // Clear container
  
    if (filteredProducts.length === 0) {
      productContainer.innerHTML = "<p>No products found!</p>";
      return;
    }
  
    filteredProducts.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.className = "product";
      productDiv.innerHTML = `
        <h3>${product.name}</h3>
        <p>Category: ${product.category}</p>
        <p>Price: $${product.price}</p>
        ${product.size ? `<p>Size: ${product.size}</p>` : ""}
      `;
      productContainer.appendChild(productDiv);
    });
  }
  
  // Initial Display
  displayProducts(products);
  
  // Filter Logic
  function applyFilters() {
    let filteredProducts = products;
  
    // Category Filter
    const selectedCategory = categoryFilter.value;
    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === selectedCategory
      );
    }
  
    // Price Range Filter
    const minPrice = parseFloat(minPriceInput.value) || 0;
    const maxPrice = parseFloat(maxPriceInput.value) || Infinity;
    filteredProducts = filteredProducts.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
  
    // Size Filter
    const selectedSizes = Array.from(sizeFilters)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);
    if (selectedSizes.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        selectedSizes.includes(product.size)
      );
    }
  
    // Display Filtered Products
    displayProducts(filteredProducts);
  }
  
  // Event Listeners
  categoryFilter.addEventListener("change", applyFilters);
  applyPriceFilterButton.addEventListener("click", applyFilters);
  sizeFilters.forEach((checkbox) =>
    checkbox.addEventListener("change", applyFilters)
  );
  