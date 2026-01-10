<template>
  <NavBar/>
<div class="bg-gray-50 min-h-screen py-12">
  <div class="max-w-6xl mx-auto px-4">
    <div class="mb-10">
      <h1 class="text-3xl font-bold text-gray-900">Checkout</h1>
      <p class="text-gray-600">Please enter your details to complete your purchase.</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div class="lg:col-span-8 space-y-8">
        
        <section class="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 class="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span class="bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">1</span>
            Shipping Information
          </h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="col-span-1">
              <label class="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input type="text" class="w-full border-gray-200 border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="John">
            </div>
            <div class="col-span-1">
              <label class="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input type="text" class="w-full border-gray-200 border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="Doe">
            </div>
            <div class="col-span-2">
              <label class="block text-sm font-medium text-gray-700 mb-1">Phone Number (M-Pesa)</label>
              <input type="tel" class="w-full border-gray-200 border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="0712 345 678">
            </div>
            <div class="col-span-2">
              <label class="block text-sm font-medium text-gray-700 mb-1">Delivery Address</label>
              <input type="text" class="w-full border-gray-200 border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="Apartment, Street, Area">
            </div>
            <div class="col-span-1">
              <label class="block text-sm font-medium text-gray-700 mb-1">City</label>
              <select class="w-full border-gray-200 border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                <option>Nairobi</option>
                <option>Mombasa</option>
                <option>Kisumu</option>
                <option>Nakuru</option>
              </select>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 class="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span class="bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">2</span>
            Payment Method
          </h2>
          
          <div class="space-y-4">
            <label class="flex items-center p-4 border-2 border-blue-600 rounded-xl bg-blue-50 cursor-pointer">
              <input type="radio" name="payment" checked class="w-4 h-4 text-blue-600">
              <div class="ml-4 flex items-center justify-between w-full">
                <div>
                  <span class="block font-bold text-gray-900">M-Pesa</span>
                  <span class="text-sm text-gray-600">STK Push will be sent to your phone</span>
                </div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/15/M-PESA_LOGO-01.svg" class="h-8" alt="M-Pesa">
              </div>
            </label>

            <label class="flex items-center p-4 border border-gray-200 rounded-xl hover:border-blue-200 cursor-pointer transition-all">
              <input type="radio" name="payment" class="w-4 h-4 text-blue-600">
              <div class="ml-4 flex items-center justify-between w-full">
                <div>
                  <span class="block font-bold text-gray-900">Credit / Debit Card</span>
                  <span class="text-sm text-gray-600">Visa, Mastercard, Amex</span>
                </div>
                <div class="flex gap-1">
                  <div class="w-8 h-5 bg-gray-200 rounded"></div>
                  <div class="w-8 h-5 bg-gray-200 rounded"></div>
                </div>
              </div>
            </label>
          </div>
        </section>
      </div>

      <div class="lg:col-span-4">
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-8">
          <h2 class="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>
          
          <div class="space-y-4 mb-6">
            <div class="flex items-center gap-4">
              <img src="https://picsum.photos/seed/tech/100" class="w-16 h-16 rounded-lg object-cover">
              <div class="flex-1">
                <h4 class="font-bold text-sm text-gray-800">Wireless Headphones</h4>
                <p class="text-xs text-gray-500">Qty: 1</p>
              </div>
              <span class="font-bold text-sm text-gray-900">KSh 16,640</span>
            </div>
            
            <div class="flex items-center gap-4">
              <img src="https://picsum.photos/seed/watch/100" class="w-16 h-16 rounded-lg object-cover">
              <div class="flex-1">
                <h4 class="font-bold text-sm text-gray-800">Smart Watch</h4>
                <p class="text-xs text-gray-500">Qty: 2</p>
              </div>
              <span class="font-bold text-sm text-gray-900">KSh 51,340</span>
            </div>
          </div>

          <div class="border-t pt-4 space-y-2">
            <div class="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>KSh 67,980</span>
            </div>
            <div class="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span class="text-green-600 font-medium italic">FREE</span>
            </div>
            <div class="flex justify-between text-xl font-black text-gray-900 pt-4">
              <span>Total</span>
              <span>KSh 67,980</span>
            </div>
          </div>

          <button @click="completeOrder" class="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg mt-8 hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 active:scale-[0.98]">
            Pay KSh 67,980
          </button>
          
          <p class="text-center text-xs text-gray-400 mt-4">
            By clicking "Pay", you agree to our Terms & Conditions
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>

    const router = useRouter()

    async function completeOrder(){

        await router.push("/order-complete")
        
    }

</script>