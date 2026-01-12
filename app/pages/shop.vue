<template>
  <div>
    <NavBar/>
    <div class="bg-base-200 min-h-screen font-sans">
      <main class="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        
        <!-- Sidebar -->
        <aside class="w-full md:w-72 flex-shrink-0">
          <div class="sticky top-8 space-y-8">
            
            <!-- Search -->
            <div>
              <h3 class="text-xs font-bold text-base-content/60 uppercase tracking-widest mb-4">Search</h3>
              <div class="relative">
                <input 
                  type="text" 
                  placeholder="Find something..." 
                  class="input input-bordered w-full pl-10"
                />
                <svg class="w-5 h-5 text-base-content/40 absolute left-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            <!-- Categories -->
            <div>
              <h3 class="text-xs font-bold text-base-content/60 uppercase tracking-widest mb-4">Categories</h3>
              <nav class="space-y-2">
                <button class="btn btn-primary w-full justify-start">
                  <span>All Products</span>
                </button>
                <button class="btn btn-ghost w-full justify-start hover:btn-primary hover:btn-outline">
                  <span>Electronics</span>
                </button>
                <button class="btn btn-ghost w-full justify-start hover:btn-primary hover:btn-outline">
                  <span>Fashion</span>
                </button>
                <button class="btn btn-ghost w-full justify-start hover:btn-primary hover:btn-outline">
                  <span>Home & Living</span>
                </button>
              </nav>
            </div>

            <!-- Price Range -->
            <div class="pt-6 border-t border-base-300">
              <h3 class="text-xs font-bold text-base-content/60 uppercase tracking-widest mb-4">Max Price</h3>
              <input type="range" min="1000" max="100000" class="range range-primary">
              <div class="flex justify-between text-sm font-bold text-base-content mt-4">
                <span>KSh 1,000</span>
                <span>KSh 100k+</span>
              </div>
            </div>
          </div>
        </aside>

        <!-- Products Section -->
        <section class="flex-1">
          <div class="flex items-center justify-between mb-8">
            <h2 class="text-2xl font-black text-base-content">Explore Collection</h2>
            <span class="text-sm text-base-content/60 font-medium">Showing 12 Products</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <!-- Product Card 1 -->
            <div class="card bg-base-100 shadow-sm border border-base-300 hover:shadow-xl transition-all duration-300">
              <figure class="aspect-square bg-base-300">
                <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80" alt="Item" class="object-cover w-full h-full hover:scale-110 transition duration-500">
              </figure>
              <div class="card-body">
                <h4 class="card-title text-base-content">Premium Headphones</h4>
                <p class="text-base-content/60 text-sm">Wireless noise cancelling.</p>
                <div class="card-actions justify-between items-center mt-4">
                  <span class="text-lg font-black text-primary">KSh 15,000</span>
                  <button class="btn btn-primary btn-sm">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" stroke-width="2"/></svg>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <!-- Product Card 2 - SALE -->
            <div class="card bg-base-100 shadow-sm border border-base-300 hover:shadow-xl transition-all duration-300">
              <figure class="aspect-square bg-base-300 relative">
                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80" alt="Item" class="object-cover w-full h-full hover:scale-110 transition duration-500">
                <span class="badge badge-error absolute top-3 left-3 font-black shadow-lg">SALE</span>
              </figure>
              <div class="card-body">
                <h4 class="card-title text-base-content">Nike Air Max</h4>
                <p class="text-base-content/60 text-sm">Original performance sneakers.</p>
                <div class="card-actions justify-between items-center mt-4">
                  <div class="flex flex-col">
                    <span class="text-lg font-black text-primary">KSh 8,500</span>
                    <span class="text-xs text-base-content/40 line-through">KSh 12,000</span>
                  </div>
                  <button class="btn btn-primary btn-sm">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" stroke-width="2"/></svg>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <!-- Product Card 3 -->
            <div class="card bg-base-100 shadow-sm border border-base-300 hover:shadow-xl transition-all duration-300">
              <figure class="aspect-square bg-base-300">
                <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80" alt="Item" class="object-cover w-full h-full hover:scale-110 transition duration-500">
              </figure>
              <div class="card-body">
                <h4 class="card-title text-base-content">Classic Smart Watch</h4>
                <p class="text-base-content/60 text-sm">Track your fitness and health.</p>
                <div class="card-actions justify-between items-center mt-4">
                  <span class="text-lg font-black text-primary">KSh 22,000</span>
                  <button class="btn btn-primary btn-sm">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" stroke-width="2"/></svg>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <!-- Product Card 4 -->
            <div class="card bg-base-100 shadow-sm border border-base-300 hover:shadow-xl transition-all duration-300">
              <figure class="aspect-square bg-base-300">
                <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80" alt="Item" class="object-cover w-full h-full hover:scale-110 transition duration-500">
              </figure>
              <div class="card-body">
                <h4 class="card-title text-base-content">Polaroid Camera</h4>
                <p class="text-base-content/60 text-sm">Capture memories instantly.</p>
                <div class="card-actions justify-between items-center mt-4">
                  <span class="text-lg font-black text-primary">KSh 11,200</span>
                  <button class="btn btn-primary btn-sm">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" stroke-width="2"/></svg>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup>
// Add any component logic here if needed
</script>

<style scoped>
/* Custom styles if needed */
</style>