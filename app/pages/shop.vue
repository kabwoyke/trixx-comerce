<template>
    <NavBar/>
   <div class="bg-gray-50 dark:bg-transparent  min-h-screen font-sans">
  <main class="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
    
    <aside class="w-full md:w-72 flex-shrink-0">
      <div class="sticky top-8 space-y-8">
        
        <div>
          <h3 class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Search</h3>
          <div class="relative">
            <input 
              type="text" 
              placeholder="Find something..." 
              class="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all shadow-sm"
            />
            <svg class="w-5 h-5 text-gray-400 absolute left-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div>
          <h3 class="text-xs font-bold text-gray-400  uppercase tracking-widest mb-4">Categories</h3>
          <nav class="space-y-2 dark:text-white">
            <button class="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-indigo-600 text-white font-semibold shadow-md">
              <span>All Products</span>
            </button>
            <button class="w-full flex items-center justify-between px-4 py-3 rounded-xl dark:text-white text-gray-600 hover:bg-white hover:shadow-sm transition font-medium group">
              <span class="group-hover:text-indigo-600">Electronics</span>
            </button>
            <button class="w-full flex items-center justify-between px-4 py-3 rounded-xl text-gray-600 hover:bg-white hover:shadow-sm transition font-medium group">
              <span class="group-hover:text-indigo-600">Fashion</span>
            </button>
            <button class="w-full flex items-center justify-between px-4 py-3 rounded-xl text-gray-600 hover:bg-white hover:shadow-sm transition font-medium group">
              <span class="group-hover:text-indigo-600">Home & Living</span>
            </button>
          </nav>
        </div>

        <div class="pt-6 border-t border-gray-200">
          <h3 class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Max Price</h3>
          <input type="range" min="1000" max="100000" class="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600">
          <div class="flex justify-between text-sm font-bold text-gray-700 mt-4">
            <span>KSh 1,000</span>
            <span>KSh 100k+</span>
          </div>
        </div>
      </div>
    </aside>

    <section class="flex-1">
      <div class="flex items-center justify-between mb-8">
        <h2 class="text-2xl font-black text-gray-900 dark:text-white">Explore Collection</h2>
        <span class="text-sm text-gray-500 font-medium">Showing 12 Products</span>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <div class="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
          <div class="aspect-square bg-gray-100 relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80" alt="Item" class="object-cover w-full h-full group-hover:scale-110 transition duration-500">
          </div>
          <div class="p-5 flex flex-col flex-grow">
            <h4 class="text-gray-900 font-bold text-lg mb-1">Premium Headphones</h4>
            <p class="text-gray-500 text-sm mb-6">Wireless noise cancelling.</p>
            <div class="mt-auto flex items-center justify-between gap-3">
              <span class="text-lg font-black text-indigo-600 whitespace-nowrap">KSh 15,000</span>
              <button class="flex items-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-indigo-600 transition-colors whitespace-nowrap">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" stroke-width="2"/></svg>
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>

        <div class="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
          <div class="aspect-square bg-gray-100 relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80" alt="Item" class="object-cover w-full h-full group-hover:scale-110 transition duration-500">
            <span class="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 text-xs font-black rounded-full shadow-lg">SALE</span>
          </div>
          <div class="p-5 flex flex-col flex-grow">
            <h4 class="text-gray-900 font-bold text-lg mb-1">Nike Air Max</h4>
            <p class="text-gray-500 text-sm mb-6">Original performance sneakers.</p>
            <div class="mt-auto flex items-center justify-between gap-3">
              <div class="flex flex-col">
                <span class="text-lg font-black text-indigo-600 whitespace-nowrap">KSh 8,500</span>
                <span class="text-xs text-gray-400 line-through">KSh 12,000</span>
              </div>
              <button class="flex items-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-indigo-600 transition-colors whitespace-nowrap">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" stroke-width="2"/></svg>
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>

        <div class="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
          <div class="aspect-square bg-gray-100 relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80" alt="Item" class="object-cover w-full h-full group-hover:scale-110 transition duration-500">
          </div>
          <div class="p-5 flex flex-col flex-grow">
            <h4 class="text-gray-900 font-bold text-lg mb-1">Classic Smart Watch</h4>
            <p class="text-gray-500 text-sm mb-6">Track your fitness and health.</p>
            <div class="mt-auto flex items-center justify-between gap-3">
              <span class="text-lg font-black text-indigo-600 whitespace-nowrap">KSh 22,000</span>
              <button class="flex items-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-indigo-600 transition-colors whitespace-nowrap">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" stroke-width="2"/></svg>
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>

        <div class="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
          <div class="aspect-square bg-gray-100 relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80" alt="Item" class="object-cover w-full h-full group-hover:scale-110 transition duration-500">
          </div>
          <div class="p-5 flex flex-col flex-grow">
            <h4 class="text-gray-900 font-bold text-lg mb-1">Polaroid Camera</h4>
            <p class="text-gray-500 text-sm mb-6">Capture memories instantly.</p>
            <div class="mt-auto flex items-center justify-between gap-3">
              <span class="text-lg font-black text-indigo-600 whitespace-nowrap">KSh 11,200</span>
              <button class="flex items-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-indigo-600 transition-colors whitespace-nowrap">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" stroke-width="2"/></svg>
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  </main>
</div>
</template>