<template>
    <NavBar />
    <div class="bg-base-100 px-16 py-8">
        <!-- Carousel Section -->
        <div class="carousel w-full mt-4 h-72">
            <div id="slide1" class="carousel-item relative w-full">
                <img src="/happy1.jpg" class="w-full h-full object-cover" />
                <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" class="btn btn-circle">❮</a>
                    <a href="#slide2" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" class="carousel-item relative w-full">
                <img src="/happy2.jpg" class="w-full h-full object-cover" />
                <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" class="btn btn-circle">❮</a>
                    <a href="#slide3" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" class="carousel-item relative w-full">
                <img src="/happy1.jpg" class="w-full h-full object-cover" />
                <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" class="btn btn-circle">❮</a>
                    <a href="#slide4" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" class="carousel-item relative w-full">
                <img src="/happy2.jpg" class="w-full h-full object-cover" />
                <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" class="btn btn-circle">❮</a>
                    <a href="#slide1" class="btn btn-circle">❯</a>
                </div>
            </div>
        </div>

        <!-- Shop by Category Section -->
        <section class="max-w-full px-4 py-12">
            <div class="mb-8 text-center md:text-left">
                <h2 class="text-3xl font-bold text-base-content tracking-tight">Shop by Category</h2>
                <p class="mt-2 text-base-content/70">Discover our curated collections for every style.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-6 gap-4">
                <!-- Men's Collection -->
                <div class="md:col-span-3 relative group overflow-hidden bg-base-300 rounded-xl h-80">
                    <img src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?auto=format&fit=crop&q=80&w=800"
                        alt="Men's Fashion"
                        class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                    <div class="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
                    <div class="absolute inset-0 p-8 flex flex-col justify-end">
                        <h3 class="text-2xl font-bold text-white">Men's Collection</h3>
                        <a href="#"
                            class="mt-2 text-white font-medium underline underline-offset-4 decoration-2 hover:text-gray-200">Shop
                            Now</a>
                    </div>
                </div>

                <!-- Women's Collection -->
                <div class="md:col-span-3 relative group overflow-hidden bg-base-300 rounded-xl h-80">
                    <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800"
                        alt="Women's Fashion"
                        class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                    <div class="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
                    <div class="absolute inset-0 p-8 flex flex-col justify-end">
                        <h3 class="text-2xl font-bold text-white">Women's Collection</h3>
                        <a href="#"
                            class="mt-2 text-white font-medium underline underline-offset-4 decoration-2 hover:text-gray-200">Shop
                            Now</a>
                    </div>
                </div>

                <!-- Accessories -->
                <div class="md:col-span-2 relative group overflow-hidden bg-base-300 rounded-xl h-64">
                    <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=600"
                        alt="Accessories"
                        class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                    <div class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                    <div class="absolute inset-0 p-6 flex flex-col justify-end text-center">
                        <h3 class="text-lg font-bold text-white">Accessories</h3>
                        <a href="#" class="text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity">View
                            All</a>
                    </div>
                </div>

                <!-- Footwear -->
                <div class="md:col-span-2 relative group overflow-hidden bg-base-300 rounded-xl h-64">
                    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600"
                        alt="Footwear"
                        class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                    <div class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                    <div class="absolute inset-0 p-6 flex flex-col justify-end text-center">
                        <h3 class="text-lg font-bold text-white">Footwear</h3>
                        <a href="#" class="text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity">View
                            All</a>
                    </div>
                </div>

                <!-- Electronics -->
                <div class="md:col-span-2 relative group overflow-hidden bg-base-300 rounded-xl h-64">
                    <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600"
                        alt="Electronics"
                        class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                    <div class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                    <div class="absolute inset-0 p-6 flex flex-col justify-end text-center">
                        <h3 class="text-lg font-bold text-white">Electronics</h3>
                        <a href="#" class="text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity">View
                            All</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Featured Products Section -->
        <section class="max-w-full px-4 py-12">
            <div>
                <h2 class="text-2xl font-bold text-base-content">Featured Products</h2>
            </div>

            <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <FeaturedProducts 
                    title="Nike Sneakers" 
                    status="NEW" 
                    img="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                />
                <FeaturedProducts 
                    title="Adidas One" 
                    img="https://m.media-amazon.com/images/I/61FbqzPD8TL._AC_UL1500_.jpg" 
                />
                <FeaturedProducts 
                    title="Jordan" 
                    img="https://m.media-amazon.com/images/I/31kvRXaixML._AC_SY300_.jpg"
                />
            </div>
        </section>

        <Footer/>
    </div>
</template>