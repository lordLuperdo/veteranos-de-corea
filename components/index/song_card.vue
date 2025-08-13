<script setup>
const emit = defineEmits(["detail"])
const props = defineProps(["imagen","title","link"])

function detalle() {
  emit('detail')
}

</script>
<template>
<div class="card  md:w-40 shadow-md flex flex-col rounded-md overflow-hidden w-36 relative ">
  
  <button @click="detalle"  class="absolute bg-orange-400 right-2 top-2 rounded-full border-red-950 border-2">
    <div class="flex  justify-center items-center py-1 px-1 ">
        <Icon name="material-symbols:play-arrow" class="text-white text-xl items-center flex bg-red-800"/>
    </div>
  </button>
  

  <figure class="bg-red-400 flex md:w-40 md:h-40">
    <img 
      class=" w-full h-full"
      :src="imagen"
      alt="veterano" />
  </figure>
  <div class="fondo h-20 absolute w-36 bottom-0 pt-11">
    <h2 class="card-title text-center text-white font-bold">{{ title }}</h2>
  </div>
  
</div>
</template>

<style>
.fondo{
  background: linear-gradient(rgba(99, 3, 3,0),rgba(99, 3, 3));
}
</style>