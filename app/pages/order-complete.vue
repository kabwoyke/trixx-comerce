<template>
  <NavBar/>
  <div class="bg-base-200 min-h-screen flex items-center justify-center py-12 px-4">
    <div class="max-w-2xl w-full bg-base-100 rounded-3xl shadow-xl border border-base-300 overflow-hidden">
      
      <!-- Header Section -->
      <div class="bg-primary p-8 text-center text-primary-content">
        <div class="inline-flex items-center justify-center w-20 h-20 bg-base-content/20 rounded-full mb-4 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 class="text-3xl font-extrabold mb-2">Payment Received!</h1>
        <p class="opacity-90">Thank you for your purchase. Your order is being processed.</p>
      </div>

      <!-- Content Section -->
      <div class="p-8">
        <!-- Order Info -->
        <div class="flex flex-col md:flex-row justify-between mb-8 pb-8 border-b border-base-300 gap-4">
          <div>
            <p class="text-xs uppercase tracking-widest text-base-content/50 font-bold mb-1">Order Number</p>
            <p class="text-lg font-bold text-base-content">#ORD-8829104</p>
          </div>
          <div>
            <p class="text-xs uppercase tracking-widest text-base-content/50 font-bold mb-1">Date</p>
            <p class="text-lg font-bold text-base-content">January 10, 2026</p>
          </div>
          <div>
            <p class="text-xs uppercase tracking-widest text-base-content/50 font-bold mb-1">Payment Method</p>
            <p class="text-lg font-bold text-primary flex items-center gap-2">
              M-Pesa 
              <span class="w-2 h-2 bg-success rounded-full animate-pulse"></span>
            </p>
          </div>
        </div>

        <!-- Shipment Details -->
        <div class="space-y-4 mb-8">
          <h3 class="text-sm font-bold text-base-content uppercase tracking-wide">Shipment details</h3>
          <div class="flex items-center gap-4 bg-base-200 p-4 rounded-xl border border-base-300">
            <div class="relative">
              <img src="https://picsum.photos/seed/tech/100" class="w-12 h-12 rounded-lg object-cover">
              <span class="absolute -top-2 -right-2 bg-primary text-primary-content text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-base-100">3</span>
            </div>
            <div class="flex-1">
              <p class="text-sm font-bold text-base-content">Multiple Items</p>
              <p class="text-xs text-base-content/60">Standard Delivery (3-5 Business Days)</p>
            </div>
            <p class="font-bold text-base-content">KSh 67,980</p>
          </div>
        </div>

        <!-- Address and Next Steps -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div>
            <h4 class="text-sm font-bold text-base-content mb-2">Delivery Address</h4>
            <p class="text-sm text-base-content/60 leading-relaxed">
              John Doe<br>
              Kilimani, Yaya Center Area<br>
              Nairobi, Kenya<br>
              +254 712 345 678
            </p>
          </div>
          <div class="bg-primary/10 p-4 rounded-xl border border-primary/20">
            <h4 class="text-sm font-bold text-primary mb-1">What's Next?</h4>
            <p class="text-xs text-base-content/70 leading-relaxed">
              You will receive an SMS confirmation once your order is dispatched from our warehouse.
            </p>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-col sm:flex-row gap-4">
          <button class="btn btn-primary flex-1 py-4 h-auto font-bold shadow-lg">
            Track My Order
          </button>
          <button class="btn btn-outline flex-1 py-4 h-auto font-bold">
            Continue Shopping
          </button>
        </div>
        
        <!-- Support Info -->
        <p class="text-center text-xs text-base-content/40 mt-8">
          Need help? Contact our support at <span class="text-primary font-medium">support@yourshop.co.ke</span>
        </p>
      </div>
    </div>
  </div>
</template>