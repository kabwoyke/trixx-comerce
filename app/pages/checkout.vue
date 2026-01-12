<template>
  <div>
    <NavBar/>
    <div class="bg-base-200 min-h-screen py-12">
      <div class="max-w-6xl mx-auto px-4">
        <div class="mb-10">
          <h1 class="text-3xl font-bold text-base-content">Checkout</h1>
          <p class="text-base-content/60">Please enter your details to complete your purchase.</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div class="lg:col-span-8 space-y-8">
            
            <!-- Shipping Information -->
            <section class="card bg-base-100 shadow-sm border border-base-300">
              <div class="card-body">
                <h2 class="card-title text-base-content mb-4">
                  <span class="badge badge-primary badge-lg">1</span>
                  Shipping Information
                </h2>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text font-medium">First Name</span>
                    </label>
                    <input type="text" placeholder="John" class="input input-bordered w-full" />
                  </div>
                  
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text font-medium">Last Name</span>
                    </label>
                    <input type="text" placeholder="Doe" class="input input-bordered w-full" />
                  </div>
                  
                  <div class="form-control md:col-span-2">
                    <label class="label">
                      <span class="label-text font-medium">Phone Number (M-Pesa)</span>
                    </label>
                    <input type="tel" placeholder="0712 345 678" class="input input-bordered w-full" />
                  </div>
                  
                  <div class="form-control md:col-span-2">
                    <label class="label">
                      <span class="label-text font-medium">Delivery Address</span>
                    </label>
                    <input type="text" placeholder="Apartment, Street, Area" class="input input-bordered w-full" />
                  </div>
                  
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text font-medium">City</span>
                    </label>
                    <select class="select select-bordered w-full">
                      <option>Nairobi</option>
                      <option>Mombasa</option>
                      <option>Kisumu</option>
                      <option>Nakuru</option>
                    </select>
                  </div>
                </div>
              </div>
            </section>

            <!-- Payment Method -->
            <section class="card bg-base-100 shadow-sm border border-base-300">
              <div class="card-body">
                <h2 class="card-title text-base-content mb-4">
                  <span class="badge badge-primary badge-lg">2</span>
                  Payment Method
                </h2>
                
                <div class="space-y-4">
                  <!-- M-Pesa Option -->
                  <label class="label cursor-pointer border-2 border-primary bg-primary/10 rounded-xl p-4 hover:bg-primary/20 transition-colors">
                    <input type="radio" name="payment" class="radio radio-primary" checked />
                    <div class="flex-1 ml-4">
                      <div class="flex items-center justify-between">
                        <div>
                          <span class="block font-bold text-base-content">M-Pesa</span>
                          <span class="text-sm text-base-content/60">STK Push will be sent to your phone</span>
                        </div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/15/M-PESA_LOGO-01.svg" class="h-8" alt="M-Pesa">
                      </div>
                    </div>
                  </label>

                  <!-- Card Option -->
                  <label class="label cursor-pointer border-2 border-base-300 rounded-xl p-4 hover:border-primary/50 transition-colors">
                    <input type="radio" name="payment" class="radio radio-primary" />
                    <div class="flex-1 ml-4">
                      <div class="flex items-center justify-between">
                        <div>
                          <span class="block font-bold text-base-content">Credit / Debit Card</span>
                          <span class="text-sm text-base-content/60">Visa, Mastercard, Amex</span>
                        </div>
                        <div class="flex gap-1">
                          <div class="w-8 h-5 bg-base-300 rounded"></div>
                          <div class="w-8 h-5 bg-base-300 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </section>
          </div>

          <!-- Order Summary Sidebar -->
          <div class="lg:col-span-4">
            <div class="card bg-base-100 shadow-sm border border-base-300 sticky top-8">
              <div class="card-body">
                <h2 class="card-title text-base-content mb-6">Order Summary</h2>
                
                <div class="space-y-4 mb-6">
                  <!-- Item 1 -->
                  <div class="flex items-center gap-4">
                    <div class="avatar">
                      <div class="w-16 h-16 rounded-lg">
                        <img src="https://picsum.photos/seed/tech/100" alt="Product" />
                      </div>
                    </div>
                    <div class="flex-1">
                      <h4 class="font-bold text-sm text-base-content">Wireless Headphones</h4>
                      <p class="text-xs text-base-content/60">Qty: 1</p>
                    </div>
                    <span class="font-bold text-sm text-base-content">KSh 16,640</span>
                  </div>
                  
                  <!-- Item 2 -->
                  <div class="flex items-center gap-4">
                    <div class="avatar">
                      <div class="w-16 h-16 rounded-lg">
                        <img src="https://picsum.photos/seed/watch/100" alt="Product" />
                      </div>
                    </div>
                    <div class="flex-1">
                      <h4 class="font-bold text-sm text-base-content">Smart Watch</h4>
                      <p class="text-xs text-base-content/60">Qty: 2</p>
                    </div>
                    <span class="font-bold text-sm text-base-content">KSh 51,340</span>
                  </div>
                </div>

                <div class="divider my-0"></div>

                <div class="space-y-2 py-4">
                  <div class="flex justify-between text-base-content/60">
                    <span>Subtotal</span>
                    <span class="text-base-content">KSh 67,980</span>
                  </div>
                  <div class="flex justify-between text-base-content/60">
                    <span>Shipping</span>
                    <span class="badge badge-success font-medium">FREE</span>
                  </div>
                  <div class="divider my-2"></div>
                  <div class="flex justify-between text-xl font-black text-base-content">
                    <span>Total</span>
                    <span>KSh 67,980</span>
                  </div>
                </div>

                <button @click="completeOrder" class="btn btn-primary w-full btn-lg mt-4">
                  Pay KSh 67,980
                </button>
                
                <p class="text-center text-xs text-base-content/40 mt-4">
                  By clicking "Pay", you agree to our Terms & Conditions
                </p>
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

async function completeOrder() {
  await router.push("/order-complete")
}
</script>

<style scoped>
/* Custom styles if needed */
</style>