<template>
    <div class="card bg-base-100 shadow-sm w-full">
  <figure>
    <img
      :src= img 
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">
      {{ title }}
      <div v-if="status" class="badge badge-secondary">{{ status }}</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <div class="badge badge-outline">Fashion</div>
      <div class="badge badge-outline">Products</div>
    </div>
  </div>
</div>
</template>

<script setup>

    const props = defineProps(['title' , 'status' , 'img'])

</script>