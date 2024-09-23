function getDataProducts() {
  return $.getJSON("data/products.json", function (data) {
    const products = data.product;
    $.each(products, function (i, data) {
      $("#products").append(`
        <div class="flex flex-col bg-white shadow-sm rounded-xl">
          <img class="w-full h-auto rounded-t-xl" src="/src/assets/products/${data.image}" alt="Card Image">
          <div class="p-4 md:p-5">
            <h3 class="text-lg font-bold text-gray-800 ">
              ${data.name}
            </h3>
            <p class="mt-1 text-slate-500">
              ${data.description}
            </p>
            <p class="mt-1 text-pink-700">
              Rp. ${data.price}
            </p>
            <a class="inline-flex items-center justify-center w-full px-3 py-2 mt-2 text-sm font-medium text-white bg-pink-600 border border-transparent rounded-lg gap-x-2 hover:bg-pink-700 focus:outline-none focus:bg-pink-700 disabled:opacity-50 disabled:pointer-events-none"
              href="#">
              Add To Bag
            </a>
          </div>
        </div>  
      `);
    });
  });
}

getDataProducts();