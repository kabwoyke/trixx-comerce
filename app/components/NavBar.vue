<template>

<div class="navbar bg-base-100 mt-4">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabindex="-1"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul class="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <NuxtLink href="/" class="btn btn-ghost text-xl">ProComerce</NuxtLink>
  </div>
  <div class="navbar-center hidden lg:flex -full">
    <label class="input">
  <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      stroke-linejoin="round"
      stroke-linecap="round"
      stroke-width="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" class="w-96" required placeholder="Search" />
</label>
  </div>
  <div class="navbar-end">
    <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <li><NuxtLink href="/shop">Shop</NuxtLink></li>
      <li><NuxtLink href="/cart" >Cart(0)</NuxtLink></li>
       <li><a>Wishlist(0)</a></li>
    </ul>
  </div>
  </div>
</div>

</template>