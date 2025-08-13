
<script setup>
const props = defineProps(["texto","imagen","title","link"])

</script>

<template>
 
<div class="bg-red-950 w-56  relative items-center flex flex-col  flex flex-col p-3 radio shadow-md h-[21rem]">

   

    <div class=" relative flex bg-blue-200 w-40 h-40 rounded-full  justify-center bg-red-500 mt-5"> 
        <img :src="imagen" alt="imagen no encontrada" class="w-full flex justify-center rounded-full">
          
        <div class="top-[7.5rem] font-bold text-white absolute">
        <h3 class="text-center text-3xl px-4 w-40 py-1 label bg-red-700">{{ title }}</h3>
         </div>
    </div>

  

    <div class="  flex aling-center flex-col ">
        
        <p class="p-3 text-center text-white">{{texto}}</p>
    </div>

    <NuxtLink :to="link" target="_blank" class=" absolute top-[95%]  py-2 text-center bg-orange-400 w-48 rounded-sm text-white font-semibold">Visitar</NuxtLink>
    

</div>


</template>

<style>
.radio{
    border-radius: 100rem 100rem 7rem 7rem;
}
.label{
    border-radius: 0rem 1rem 0rem 1rem;
}
</style>