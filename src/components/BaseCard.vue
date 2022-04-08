<script setup>
defineProps({
  obra: {
    type: Object,
  },
});
</script>
<template>
  <div class="card" style="width: 18rem">
    <img :src="obra.photo" class="card-img-top" alt="" />
    <div class="card-header">{{ obra.company }}</div>
    <div class="card-body">
      <h5 class="card-title">{{ obra.title }}</h5>
      <p class="card-text">Clasificación por edades:{{ obra.age }}</p>
    </div>
     <div class="card-footer">
        <small class="text-muted">{{ obra.date }}</small>
      </div>
  </div>
</template>
