function getProductPilihan() {
  return $.getJSON("data/products.json", function (data) {
    const product = data.product;
    $.each(product, function (i, data) {
      if (data.name === "Make Over" || data.name === "WARDAH") {
        $("#productPilihan").append(`
          <div class="flex flex-col bg-white shadow-sm rounded-xl">
          <img class="w-full h-auto rounded-t-xl" src="/src/assets/products/${data.image}" alt="Card Image">
          <div class="p-4 md:p-5">
            <h3 class="text-lg font-bold text-gray-800 ">
              ${data.name}
            </h3>
            <p class="mt-1 text-slate-500">
              ${data.description}
            </p>
            
          </div>
        </div>
        `);
      }
    })
  })
}

getProductPilihan();