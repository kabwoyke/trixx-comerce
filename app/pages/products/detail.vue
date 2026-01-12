<template>
  <NavBar />
  <div class="bg-base-200 min-h-screen">
    <!-- Breadcrumb -->
    <div class="bg-base-100 border-b border-base-300">
      <div class="max-w-7xl mx-auto px-4 py-4">
        <div class="text-sm breadcrumbs">
          <ul class="text-base-content/60">
            <li><a href="/" class="hover:text-primary">Home</a></li>
            <li><a href="/category" class="hover:text-primary">Footwear</a></li>
            <li class="text-base-content">Nike Air Max 270</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Main Product Section -->
    <div class="max-w-7xl mx-auto px-4 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        <!-- Product Images -->
        <div class="space-y-4">
          <!-- Main Image -->
          <div class="bg-base-100 rounded-2xl overflow-hidden border border-base-300 aspect-square">
            <img 
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800" 
              alt="Nike Air Max 270"
              class="w-full h-full object-cover"
            >
          </div>
          
          <!-- Thumbnail Gallery -->
          <div class="grid grid-cols-4 gap-3">
            <div class="bg-base-100 rounded-lg overflow-hidden border-2 border-primary aspect-square cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=200" 
                alt="View 1"
                class="w-full h-full object-cover"
              >
            </div>
            <div class="bg-base-100 rounded-lg overflow-hidden border border-base-300 aspect-square cursor-pointer hover:border-primary transition-colors">
              <img 
                src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=200" 
                alt="View 2"
                class="w-full h-full object-cover"
              >
            </div>
            <div class="bg-base-100 rounded-lg overflow-hidden border border-base-300 aspect-square cursor-pointer hover:border-primary transition-colors">
              <img 
                src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=200" 
                alt="View 3"
                class="w-full h-full object-cover"
              >
            </div>
            <div class="bg-base-100 rounded-lg overflow-hidden border border-base-300 aspect-square cursor-pointer hover:border-primary transition-colors">
              <img 
                src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&q=80&w=200" 
                alt="View 4"
                class="w-full h-full object-cover"
              >
            </div>
          </div>
        </div>

        <!-- Product Info -->
        <div class="space-y-6">
          <!-- Title & Price -->
          <div>
            <div class="badge badge-primary mb-3">NEW ARRIVAL</div>
            <h1 class="text-3xl font-bold text-base-content mb-2">Nike Air Max 270</h1>
            <p class="text-base-content/60 mb-4">Men's Shoes</p>
            
            <div class="flex items-baseline gap-3">
              <span class="text-4xl font-bold text-primary">KSh 12,999</span>
              <span class="text-xl text-base-content/50 line-through">KSh 15,999</span>
              <span class="badge badge-success">19% OFF</span>
            </div>
          </div>

          <!-- Rating -->
          <div class="flex items-center gap-2">
            <div class="rating rating-sm">
              <input type="radio" name="rating-1" class="mask mask-star-2 bg-primary" />
              <input type="radio" name="rating-1" class="mask mask-star-2 bg-primary" />
              <input type="radio" name="rating-1" class="mask mask-star-2 bg-primary" />
              <input type="radio" name="rating-1" class="mask mask-star-2 bg-primary" checked />
              <input type="radio" name="rating-1" class="mask mask-star-2 bg-base-300" />
            </div>
            <span class="text-base-content/60 text-sm">(4.0) · 156 Reviews</span>
          </div>

          <div class="divider"></div>

          <!-- Size Selection -->
          <div>
            <h3 class="font-bold text-base-content mb-3">Select Size</h3>
            <div class="flex flex-wrap gap-2">
              <button class="btn btn-outline btn-sm">UK 6</button>
              <button class="btn btn-outline btn-sm">UK 7</button>
              <button class="btn btn-outline btn-sm">UK 8</button>
              <button class="btn btn-primary btn-sm">UK 9</button>
              <button class="btn btn-outline btn-sm">UK 10</button>
              <button class="btn btn-outline btn-sm">UK 11</button>
              <button class="btn btn-outline btn-sm btn-disabled">UK 12</button>
            </div>
          </div>

          <!-- Color Selection -->
          <div>
            <h3 class="font-bold text-base-content mb-3">Select Color</h3>
            <div class="flex gap-3">
              <button class="w-10 h-10 rounded-full bg-black border-2 border-primary ring-2 ring-primary ring-offset-2 ring-offset-base-100"></button>
              <button class="w-10 h-10 rounded-full bg-blue-600 border-2 border-base-300 hover:border-primary"></button>
              <button class="w-10 h-10 rounded-full bg-red-600 border-2 border-base-300 hover:border-primary"></button>
              <button class="w-10 h-10 rounded-full bg-white border-2 border-base-300 hover:border-primary"></button>
            </div>
          </div>

          <div class="divider"></div>

          <!-- Quantity & Actions -->
          <div class="space-y-4">
            <div>
              <h3 class="font-bold text-base-content mb-3">Quantity</h3>
              <div class="join">
                <button class="btn join-item btn-outline">-</button>
                <input type="text" value="1" class="input input-bordered join-item w-16 text-center" readonly />
                <button class="btn join-item btn-outline">+</button>
              </div>
            </div>

            <div class="flex gap-3">
              <button class="btn btn-primary flex-1 gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Add to Cart
              </button>
              <button class="btn btn-outline btn-square">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Features -->
          <div class="bg-base-100 rounded-xl p-6 border border-base-300 space-y-3">
            <div class="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-base-content/80 text-sm">Free shipping on orders over KSh 5,000</span>
            </div>
            <div class="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-base-content/80 text-sm">30-day return policy</span>
            </div>
            <div class="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-base-content/80 text-sm">Authentic products guaranteed</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Product Details Tabs -->
      <div class="mt-12">
        <div role="tablist" class="tabs tabs-boxed bg-base-100 border border-base-300">
          <a role="tab" class="tab tab-active">Description</a>
          <a role="tab" class="tab">Specifications</a>
          <a role="tab" class="tab">Reviews (156)</a>
        </div>

        <div class="bg-base-100 rounded-xl p-8 mt-4 border border-base-300">
          <h3 class="font-bold text-lg text-base-content mb-4">Product Description</h3>
          <div class="text-base-content/70 space-y-4 leading-relaxed">
            <p>
              The Nike Air Max 270 delivers unrivaled all-day comfort with its large 270-degree Air unit in the heel. 
              Inspired by two icons of big Air, the Air Max 93 and Air Max 180, the Air Max 270 brings a bold look and 
              incredibly comfortable cushioning to the forefront.
            </p>
            <p>
              The engineered mesh upper provides lightweight breathability and support, while the foam midsole offers 
              responsive cushioning with every step. The rubber outsole with grooves delivers durable traction and flexibility.
            </p>
            <ul class="list-disc list-inside space-y-2 ml-4">
              <li>Large Air unit in the heel provides unrivaled comfort</li>
              <li>Engineered mesh upper for lightweight breathability</li>
              <li>Foam midsole for responsive cushioning</li>
              <li>Rubber outsole with grooves for traction</li>
              <li>Padded collar for a secure, comfortable fit</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Related Products -->
      <div class="mt-12">
        <h2 class="text-2xl font-bold text-base-content mb-6">You May Also Like</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <FeaturedProducts 
            title="Adidas Ultraboost" 
            img="https://m.media-amazon.com/images/I/61FbqzPD8TL._AC_UL1500_.jpg" 
          />
          <FeaturedProducts 
            title="Jordan Retro 1" 
            status="HOT"
            img="https://m.media-amazon.com/images/I/31kvRXaixML._AC_SY300_.jpg"
          />
          <FeaturedProducts 
            title="Puma RS-X" 
            img="https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=400"
          />
          <FeaturedProducts 
            title="New Balance 574" 
            img="https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=400"
          />
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>