<script setup>
defineProps({
  obra: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div class="card" style="width: 18rem">
    <router-link :to="{ name: 'detalle', params: { id: obra.id } }">
      <img :src="obra.photo" class="card-img-top" alt="" />
    </router-link>
    <div class="card-body">
      <h5 class="card-title text-uppercase text-center">{{ obra.company }}</h5>
      <p
        class="card-text text-uppercase text-center"
        style="font-family: 'Courier New'"
      >
        {{ obra.title }}
      </p>
      <p class="text-center">{{ obra.age }}</p>
      <p class="text-center">{{ obra.date }}</p>
      <div class="text-center"></div>
    </div>
  </div>
</template>
