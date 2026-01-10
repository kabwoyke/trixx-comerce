<template>
    <NavBar/>
<div class="bg-gray-50 min-h-screen flex items-center justify-center py-12 px-4">
  <div class="max-w-2xl w-full bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
    
    <div class="bg-blue-600 p-8 text-center text-white">
      <div class="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-4 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h1 class="text-3xl font-extrabold mb-2">Payment Received!</h1>
      <p class="text-blue-100 opacity-90">Thank you for your purchase. Your order is being processed.</p>
    </div>

    <div class="p-8">
      <div class="flex flex-col md:flex-row justify-between mb-8 pb-8 border-b border-gray-100 gap-4">
        <div>
          <p class="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">Order Number</p>
          <p class="text-lg font-bold text-gray-800">#ORD-8829104</p>
        </div>
        <div>
          <p class="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">Date</p>
          <p class="text-lg font-bold text-gray-800">January 10, 2026</p>
        </div>
        <div>
          <p class="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">Payment Method</p>
          <p class="text-lg font-bold text-blue-600 flex items-center gap-2">
             M-Pesa 
             <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          </p>
        </div>
      </div>

      <div class="space-y-4 mb-8">
        <h3 class="text-sm font-bold text-gray-800 uppercase tracking-wide">Shipment details</h3>
        <div class="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
          <div class="relative">
            <img src="https://picsum.photos/seed/tech/100" class="w-12 h-12 rounded-lg object-cover">
            <span class="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">3</span>
          </div>
          <div class="flex-1">
            <p class="text-sm font-bold text-gray-800">Multiple Items</p>
            <p class="text-xs text-gray-500">Standard Delivery (3-5 Business Days)</p>
          </div>
          <p class="font-bold text-gray-900">KSh 67,980</p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div>
          <h4 class="text-sm font-bold text-gray-800 mb-2">Delivery Address</h4>
          <p class="text-sm text-gray-500 leading-relaxed">
            John Doe<br>
            Kilimani, Yaya Center Area<br>
            Nairobi, Kenya<br>
            +254 712 345 678
          </p>
        </div>
        <div class="bg-blue-50 p-4 rounded-xl border border-blue-100">
          <h4 class="text-sm font-bold text-blue-800 mb-1">What's Next?</h4>
          <p class="text-xs text-blue-600 leading-relaxed">
            You will receive an SMS confirmation once your order is dispatched from our warehouse.
          </p>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row gap-4">
        <button class="flex-1 bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 flex items-center justify-center gap-2">
          Track My Order
        </button>
        <button class="flex-1 bg-white border-2 border-gray-200 text-gray-700 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all">
          Continue Shopping
        </button>
      </div>
      
      <p class="text-center text-xs text-gray-400 mt-8">
        Need help? Contact our support at <span class="text-blue-600 font-medium">support@yourshop.co.ke</span>
      </p>
    </div>
  </div>
</div>
</template>