<template>
      <NavBar/>
    <div class="min-h-screen bg-blue-50 dark:bg-transparent flex items-center justify-center p-4 sm:p-6">
  <div class="w-full max-w-md bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 sm:p-10 transition-colors duration-300">
    <div class="text-center mb-8">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Create Account</h2>
      <p class="text-gray-500 dark:text-gray-400 mt-2">Join us today!</p>
    </div>
    
    <form class="space-y-4">
      <div>
        <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
        <input type="email" class="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg bg-transparent dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="name@company.com">
      </div>

      <div>
        <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Phone Number</label>
        <input type="tel" class="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg bg-transparent dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="+254 000 000 00 ">
      </div>
      
      <div>
        <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Password</label>
        <input type="password" class="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg bg-transparent dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="••••••••">
      </div>

      <button class="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-lg shadow-blue-500/30 transition-all active:scale-[0.98]">
        Create My Account
      </button>
    </form>

    <div class="mt-8 text-center">
      <p class="text-sm text-gray-600 dark:text-gray-400">
        Already have an account? <a href="#" class="text-blue-600 dark:text-blue-400 font-bold hover:underline">Log in here</a>
      </p>
    </div>
  </div>
</div>
</template>