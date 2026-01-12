<template>
  <div>
    <NavBar/>
    <div class="bg-base-200 min-h-screen py-10">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex items-center justify-between mb-8">
          <h1 class="text-3xl font-bold text-base-content">Shopping Cart</h1>
          <span class="text-base-content/60 font-medium">2 Items</span>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <!-- Cart Items -->
          <div class="lg:col-span-2 space-y-4">
            
            <!-- Cart Item 1 -->
            <div class="card card-side bg-base-100 shadow-sm border border-base-300 flex-col sm:flex-row">
              <figure class="w-full sm:w-32 h-32">
                <img src="https://picsum.photos/seed/tech/200" alt="Product" class="w-full h-full object-cover">
              </figure>
              <div class="card-body">
                <h3 class="card-title text-base-content">Premium Wireless Headphones</h3>
                <p class="text-base-content/60 text-sm">Midnight Black | XL</p>
                <div class="card-actions justify-between items-center">
                  <div class="join">
                    <button class="btn btn-sm join-item">-</button>
                    <button class="btn btn-sm join-item no-animation">1</button>
                    <button class="btn btn-sm join-item">+</button>
                  </div>
                  <button class="btn btn-ghost btn-sm text-error">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Remove
                  </button>
                  <div class="text-right">
                    <p class="text-xl font-bold text-base-content">KSh 16,640</p>
                    <p class="text-xs text-base-content/40 line-through">KSh 20,500</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Cart Item 2 -->
            <div class="card card-side bg-base-100 shadow-sm border border-base-300 flex-col sm:flex-row">
              <figure class="w-full sm:w-32 h-32">
                <img src="https://picsum.photos/seed/watch/200" alt="Product" class="w-full h-full object-cover">
              </figure>
              <div class="card-body">
                <h3 class="card-title text-base-content">Smart Fitness Watch</h3>
                <p class="text-base-content/60 text-sm">Silver Aluminium | Sport Band</p>
                <div class="card-actions justify-between items-center">
                  <div class="join">
                    <button class="btn btn-sm join-item">-</button>
                    <button class="btn btn-sm join-item no-animation">2</button>
                    <button class="btn btn-sm join-item">+</button>
                  </div>
                  <button class="btn btn-ghost btn-sm text-error">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Remove
                  </button>
                  <div class="text-right">
                    <p class="text-xl font-bold text-base-content">KSh 51,340</p>
                    <p class="text-xs text-base-content/60">KSh 25,670 each</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <!-- Order Summary -->
          <div class="lg:col-span-1">
            <div class="card bg-base-100 shadow-sm border border-base-300 sticky top-6">
              <div class="card-body">
                <h2 class="card-title text-base-content border-b border-base-300 pb-4">Order Summary</h2>
                
                <div class="space-y-4 py-4 border-b border-base-300">
                  <div class="flex justify-between text-base-content/60">
                    <span>Subtotal</span>
                    <span class="font-medium text-base-content">KSh 67,980</span>
                  </div>
                  <div class="flex justify-between text-base-content/60">
                    <span>Delivery Fee</span>
                    <span class="badge badge-success font-bold">FREE</span>
                  </div>
                  <div class="flex justify-between text-base-content/60">
                    <span>VAT (16%)</span>
                    <span class="font-medium text-base-content">KSh 10,876</span>
                  </div>
                </div>

                <div class="flex justify-between items-center py-4">
                  <span class="text-lg font-bold text-base-content">Total amount</span>
                  <div class="text-right">
                    <span class="text-2xl font-black text-base-content">KSh 78,856</span>
                    <p class="text-[10px] text-base-content/40 uppercase tracking-widest">Inclusive of taxes</p>
                  </div>
                </div>

                <button @click="gotoCheckout" class="btn btn-primary w-full">
                  Complete Purchase
                </button>
                
                <div class="flex flex-col gap-3 mt-4">
                  <div class="flex items-center justify-center gap-2 text-base-content/40 text-xs">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Secure M-Pesa & Card Payment
                  </div>
                  <a href="#" class="link link-hover text-center text-sm font-semibold text-base-content/60">← Back to shop</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter()

async function gotoCheckout() {
  await router.push("/checkout")
}
</script>

<style scoped>
/* Custom styles if needed */
</style>