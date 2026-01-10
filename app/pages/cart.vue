<template>
       <NavBar/>
<div class="bg-gray-50 min-h-screen dark:bg-transparent py-10">
  <div class="max-w-6xl mx-auto px-4">
    <div class="flex items-center justify-between mb-8">
      <h1 class="text-3xl font-bold text-gray-800">Shopping Cart</h1>
      <span class="text-gray-500 font-medium">2 Items</span>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      <div class="lg:col-span-2 space-y-4">
        
        <div class="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center gap-6">
          <img src="https://picsum.photos/seed/tech/200" alt="Product" class="w-32 h-32 rounded-lg object-cover bg-gray-100">
          
          <div class="flex-1 text-center sm:text-left">
            <h3 class="text-lg font-bold text-gray-800">Premium Wireless Headphones</h3>
            <p class="text-gray-500 text-sm mb-4">Midnight Black | XL</p>
            <div class="flex items-center justify-center sm:justify-start gap-6">
              <div class="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                <button class="px-3 py-1 hover:bg-gray-100 text-gray-600 transition-colors">-</button>
                <span class="px-4 font-semibold text-gray-800">1</span>
                <button class="px-3 py-1 hover:bg-gray-100 text-gray-600 transition-colors">+</button>
              </div>
              <button class="text-red-500 text-sm font-semibold hover:text-red-600 flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Remove
              </button>
            </div>
          </div>
          
          <div class="text-center sm:text-right">
            <p class="text-xl font-bold text-gray-900 text-nowrap">KSh 16,640</p>
            <p class="text-xs text-gray-400 line-through">KSh 20,500</p>
          </div>
        </div>

        <div class="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center gap-6">
          <img src="https://picsum.photos/seed/watch/200" alt="Product" class="w-32 h-32 rounded-lg object-cover bg-gray-100">
          
          <div class="flex-1 text-center sm:text-left">
            <h3 class="text-lg font-bold text-gray-800">Smart Fitness Watch</h3>
            <p class="text-gray-500 text-sm mb-4">Silver Aluminium | Sport Band</p>
            <div class="flex items-center justify-center sm:justify-start gap-6">
              <div class="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                <button class="px-3 py-1 hover:bg-gray-100 text-gray-600 transition-colors">-</button>
                <span class="px-4 font-semibold text-gray-800">2</span>
                <button class="px-3 py-1 hover:bg-gray-100 text-gray-600 transition-colors">+</button>
              </div>
              <button class="text-red-500 text-sm font-semibold hover:text-red-600 flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Remove
              </button>
            </div>
          </div>
          
          <div class="text-center sm:text-right">
            <p class="text-xl font-bold text-gray-900 text-nowrap">KSh 51,340</p>
            <p class="text-xs text-gray-500">KSh 25,670 each</p>
          </div>
        </div>

      </div>

      <div class="lg:col-span-1">
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-6">
          <h2 class="text-xl font-bold text-gray-800 mb-6 border-b pb-4">Order Summary</h2>
          
          <div class="space-y-4 pb-6 border-b border-gray-100">
            <div class="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span class="font-medium text-gray-900">KSh 67,980</span>
            </div>
            <div class="flex justify-between text-gray-600">
              <span>Delivery Fee</span>
              <span class="text-green-600 font-bold italic underline decoration-2">FREE</span>
            </div>
            <div class="flex justify-between text-gray-600">
              <span>VAT (16%)</span>
              <span class="font-medium text-gray-900">KSh 10,876</span>
            </div>
          </div>

          <div class="flex justify-between items-center py-6">
            <span class="text-lg font-bold text-gray-800">Total amount</span>
            <div class="text-right">
              <span class="text-2xl font-black text-gray-900">KSh 78,856</span>
              <p class="text-[10px] text-gray-400 uppercase tracking-widest">Inclusive of taxes</p>
            </div>
          </div>

          <button @click="gotoCheckout" class="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-green-100 mb-4 active:scale-[0.98]">
            Complete Purchase
          </button>
          
          <div class="flex flex-col gap-3">
             <div class="flex items-center justify-center gap-2 text-gray-400 text-xs">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Secure M-Pesa & Card Payment
            </div>
            <a href="#" class="text-center text-sm font-semibold text-gray-500 hover:text-gray-800 transition-colors">← Back to shop</a>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
</template>

<script setup>
   const router = useRouter()
  async function gotoCheckout(){

    await router.push("/checkout")

  }
 

</script>