<script setup>
defineProps({
  obra: {
    type: Object,
  },
});
</script>
<template>
  <div v-if="obra" class="card" style="width: 70%">
    <div class="row">
      <div class="col-sm">
        <img :src="obra.photo" class="card-img-top" alt="" />
      </div>
      <div class="col">
        <div class="card-body">

          <div class="form-group row">
            <label class="col-sm-3 col-label text-end">Compañia:</label>
            <div class="col-sm-8">
              <p 
              class="card-title"
              style="font-family: 'Courier New'">
              {{ obra.company }}</p>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-3 col-label text-end">Obra:</label>
            <div class="col-sm-8">
              <p 
              class="card-title"
              style="font-family: 'Courier New'">
              {{ obra.title }}</p>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-3 col-label text-end">Duración:</label>
            <div class="col-sm-8">
              <p 
              class="card-title"
              style="font-family: 'Courier New'">
              {{ obra.time }}</p>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-3 col-label text-end">Director:</label>
            <div class="col-sm-8">
              <p 
              class="card-title"
              style="font-family: 'Courier New'">
              {{ obra.director }}</p>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-3 col-label text-end">Elenco:</label>
            <div class="col-sm-8">
              <p 
              class="card-title"
              style="font-family: 'Courier New'">
              {{ obra.cast }}</p>
            </div>
          </div>
         <div class="form-group row">
            <label class="col-sm-3 col-label text-end">Enlace:</label>
            <div class="col-sm-8">
              <p 
              class="card-title"
              style="font-family: 'Courier New'">
              {{ obra.link }}</p>
            </div>
          </div>
          <br>
          <div class="text-center">
            <label class="fw-bold">Sinpose:</label>
         </div>
         <br>
              <p 
              class="card-title"
              style="font-family: 'Courier New'">
              {{ obra.synopsis }}</p>
        
        
        
          
         
        </div>
      </div>
    </div>
  </div>
</template>
