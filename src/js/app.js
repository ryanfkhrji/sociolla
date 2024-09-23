document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      {
        id: 1,
        name: "WARDAH",
        image: "product-1.jpg",
        price: 48500,
        description: "Everyday Cheek and Lip Tint",
      },

      {
        id: 2,
        name: "Make Over",
        image: "product-2.jpg",
        price: 129000,
        description: "Cliquematte Lip Stylo",
      },

      {
        id: 3,
        name: "ESQA",
        image: "product-3.jpg",
        price: 81250,
        description: "Waterproof Intense Eyeliner",
      },

      {
        id: 4,
        name: "Make Over",
        image: "product-4.jpg",
        price: 127000,
        description: "Brow Styler Eye Definer",
      },

      {
        id: 5,
        name: "Make Over",
        image: "product-5.jpg",
        price: 111000,
        description: "Velvet Mattifying Primer",
      },

      {
        id: 6,
        name: "Make Over",
        image: "product-6.jpg",
        price: 151000,
        description: "Powerstay Mattifying Transparent Powder",
      },

      {
        id: 7,
        name: "WARDAH",
        image: "product-7.jpg",
        price: 54000,
        description: "Acnederm Face Powder",
      },

      {
        id: 8,
        name: "Studio Tropik",
        image: "product-8.jpg",
        price: 98000,
        description: "Flawless Priming Water",
      },

      {
        id: 9,
        name: "WARDAH",
        image: "product-9.jpg",
        price: 22000,
        description: "Lightening Gentle Exfoliator",
      },

      {
        id: 10,
        name: "EMINA",
        image: "product-10.jpg",
        price: 25500,
        description: "Creamy Milk Cleansing Lotion",
      },

      {
        id: 11,
        name: "Hada Labo",
        image: "product-11.jpg",
        price: 62500,
        description: "Gokujyun Ultimate Moisturizing Milk",
      },

      {
        id: 12,
        name: "WARDAH",
        image: "product-12.jpg",
        price: 155000,
        description: "Crystal Secret Pure Treatment Essence",
      },

      {
        id: 13,
        name: "Bioderma",
        image: "product-13.jpg",
        price: 292000,
        description: "Hydrabio Essence Lotion - Hydrating Essence Toner",
      },

      {
        id: 14,
        name: "Bioderma",
        image: "product-14.jpg",
        price: 161000,
        description: "Bioderma Sebium Gel Moussant - Oil Rebalancing Foaming Gel Cleanser",
      },

      {
        id: 15,
        name: "Dancoly",
        image: "product-15.jpg",
        price: 219000,
        description: "Rosemary Hair Activating Shampoo",
      },

      {
        id: 16,
        name: "WARDAH",
        image: "product-16.jpg",
        price: 27000,
        description: "Conditioner Hair Fall",
      },

      {
        id: 17,
        name: "Dancoly",
        image: "product-17.jpg",
        price: 269000,
        description: "Argan Repair Oil",
      },

      {
        id: 18,
        name: "Dancoly",
        image: "product-18.jpg",
        price: 219000,
        description: "Argan Repair Conditioner",
      },

      {
        id: 19,
        name: "The Bath Box",
        image: "product-19.jpg",
        price: 96000,
        description: "Goats Don't Lie - Original",
      },

      {
        id: 20,
        name: "Aveeno",
        image: "product-20.jpg",
        price: 105000,
        description: "Skin Relief Moisturizing Lotion",
      },

      {
        id: 21,
        name: "Aveeno",
        image: "product-21.jpg",
        price: 182000,
        description: "Skin Relief Body Wash",
      },

      {
        id: 22,
        name: "Bioderma",
        image: "product-22.jpg",
        price: 234000,
        description: "Bioderma Atoderm Huile De Douche - Moisturizing Shower Oil",
      },

      {
        id: 23,
        name: "Banana Boat",
        image: "product-23.jpg",
        price: 150000,
        description: "Sport Ultra SPF50 Sunscreen Lotion 90ml",
      },

      {
        id: 24,
        name: "Vaseline",
        image: "product-24.jpg",
        price: 55000,
        description: "Sunblock SPF 30",
      },

      {
        id: 25,
        name: "Nivea",
        image: "product-25.jpg",
        price: 27000,
        description: "Soft Jar",
      },
    ]
  }));

  Alpine.store('cart', {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem){
      // cek apakah sudah ada di keranjang
      const cartItem = this.items.find((item) => item.id === newItem.id);

      // jika belum ada
      if(!cartItem){
        this.items.push({...newItem, quantity: 1, total: newItem.price});
        this.total += newItem.price;
        this.quantity ++;
      }else {
        // jika sudah ada tapi barang beda atau sama
        this.item = this.items.map((item) => {
          // jika barang berbeda
          if(item.id !== newItem.id){
            return item;
          }else {
            // jika barang sudah ada, tambahkan quantity dan total
            item.quantity ++;
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += item.price;
            return item;
          }
        })
      }
      console.log(this.total);
    },

    remove(id){
      // ambil item yg mau diremove berdasarkan id
      const cartItem = this.items.find((item) => item.id === id);

      // jika item lebih dari 1
      if(cartItem.quantity > 1){
        // telurusi satu"
        this.items = this.items.map((item) => {
          // jika bukan barang yg diklik
          if(item.id !== id){
            return item;
          }else {
            item.quantity --;
            item.total = item.price * item.quantity;
            this.quantity --;
            this.total -= item.price;
            return item;
          }   
        })
      }else if(cartItem.quantity === 1){
        // hapus item
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity --;
        this.total -= cartItem.price;
      }
    }
  })
});


// form validation
// const checkoutButton = document.getElementById('checkoutButton');
// checkoutButton.disable = true;

// const form = document.getElementById('checkoutForm');

// form.addEventListener('keyup', function() {
//   for(let i = 0; i < form.elements.length; i++) {
//     if(form.elements[i].value.length !== 0) {
//       checkoutButton.classList.remove('disabled');
//       checkoutButton.classList.add('disabled');
//     }else {
//       return false;
//     }
//   }
//   checkoutButton.ariaDisabled = false;
//   checkoutButton.classList.remove('disabled');
// })

// kirim data ketika tombol checkout ditekan
document.addEventListener("DOMContentLoaded", function () {
  const checkoutButton = document.getElementById("checkoutButton");
  const form = document.getElementById("checkoutForm");
  if(checkoutButton){
    checkoutButton.addEventListener("click", (e) => {
      e.preventDefault();
      const formFata = new FormData(form);
      const data = new URLSearchParams(formFata);
      const objData = Object.fromEntries(data);
      const message = formatMessage(objData);
      window.open("https://wa.me/6289512268242?text=" + encodeURIComponent(message));
    });
  }else {
    console.error("Checkout button not found");
  }
});

// format whatsapp
const formatMessage = (obj) => {
  return `
      Data Customer
    Nama: ${obj.name}
    Email: ${obj.email}
    Phone: ${obj.phone}
    ==================================================
    Data Pesananan
    ${JSON.parse(obj.items).map((item) => 
    `${item.name} (${item.quantity} x ${(item.total)}) \n`)}
    ==================================================
    TOTAL: ${rupiah(obj.total)}
    Terima Kasih.
    `
}

// konversi rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
}
