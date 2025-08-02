let inq = document.querySelector(".bttn");

inq.addEventListener("click",()=>{
    if(document.querySelector(".inputtt").value != ""){
        alert("Inquiry sent");
    }
    else{
        alert("Enter Product")
    }
    
})

let items = document.querySelectorAll(".items");

items.forEach(item => {
    item.addEventListener("click", (e) => {
        window.location.href = "Product_Listings.html";
        alert("Click on the item to see the product details")
    });
});

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const removeButtons = document.querySelectorAll(".remove-btn");

  removeButtons.forEach(button => {
    button.addEventListener("click", () => {
      const cartItem = button.closest(".cart-item");
      if (cartItem) {
        cartItem.style.display = "none";
      }
    });
  });
});



