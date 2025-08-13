<script setup>
import heads from '~/components/header/header_G.vue'
import { useDataStore } from '~/store/data_store';
import link_cards from '~/components/index/link_cards.vue';
import reproductor_g from '~/components/index/reproductor_bajo.vue'
import song_card from '~/components/index/song_card.vue';
import Button from '~/components/ui/button.vue';




const DataStore = useDataStore()

const ver_detalle = (entrevista)=> {
  console.log(entrevista)
  console.log(DataStore.detail_video)
  DataStore.detail_video = entrevista
  console.log("mk")
  navigateTo('/carpeta/entrevista')
}

</script>
<template>
  
    
 <heads></heads>

 <main class="mb-20   md:px-20 relative mb-40 ">
  <div class="flex justify-center ">
    <img src="~/assets/img/title.png" alt="" class="px-5 lg:p-1 lg:w-[80%] md:z-20 ">
  </div>
  <p class="text-center mt-2 px-8 lg:hidden">
    Conoce más sobre nuestros veteranos colombianos participantes en la guerra de Corea viendo lo que tienen que decir
  </p>
  <div class="absolute top-44 left-0 md:top-[5%] md:z-0 md:opacity-60">
     <img src="~/assets/img/general/bg-korea.png" alt="" class="w-full [mask-image:linear-gradient(to_top,transparent_5%,black_60%,black_100%)]">
     

  </div>
  
 </main>


 <section class=" flex gap-7  px-5 justify-center flex flex-col mb-10">

 

  <ul class="flex gap-4 flex-wrap px-5 justify-center ">
    <li v-for="card in DataStore.pistas.slice(0,6)" :key="card">
       <song_card
       :title="card.name"
       :imagen="card.img1"
        @detail=" ver_detalle(card)"
       />  
    </li>
  </ul> 
  

   
   
  
  </section>

 <article class="flex aling-center justify-center items-center mb-20 flex-col  relative ">
<h2 class="text-center font-25 mb-7 z-10 text-xl font-bold"> 
    ¿Dónde puedo conocer más?
</h2>

<div class="z-10">
  <ul class="flex flex-col md:flex-row gap-10 aling-center justify-center">
    <li class="" v-for="card in DataStore.redes_info" :key="card">
      <link_cards
      :imagen="card.photo"
      :texto="card.texo"
      :title="card.title"
      :link="card.link"
      
      ></link_cards>
    </li>
  </ul>
</div>




 </article>


 <div class="relative bg-blue-200">
   <section class="md:sticky bg-red-800 top-0 ">
  
  <div class="relative  p-5 py-10 flex justify-center sm:h-[80vh]">

  <div class="rotate-180 absolute overflow-hidden top-[0%] sm:top-[-10%]  left-[0%]">
     <img src="assets\img\bg_nuvecitas2.png" class=" z-0 scale-[5] sm:scale-[2] [mask-image:linear-gradient(to_top,transparent_35%,black_70%,black_100%)]" alt="">
  </div>
  <div class=" absolute overflow-hidden top-[82%] sm:top-[66%]  left-[0%]">
     <img src="assets\img\bg_nuvecitas2.png" class=" z-0 scale-[5] sm:scale-[2] [mask-image:linear-gradient(to_top,transparent_35%,black_70%,black_100%)]" alt="">
  </div>
<div class="text-white flex flex-col justify-center items-center mt-2">
    <h2 class=" text-3xl sm:text-5xl sm:leading-[1.3] font-bold text-center">CONOCE A LOS <span class="bg-orange-200 p-[1px] px-3 text-red-950 rounded-md">VETERANOS</span>  DE UNA MANERA <span class="bg-orange-200 p-[1px] px-3 rounded-md text-red-950"> DIFERENTE </span> </h2>
    <p class="text-center mt-1 sm:mt-5"> Descarga la aplicación enfocada en realidad virtual en la
        para tener una experiencia única.
    </p>
    <div class="flex flex-col justtify-center w-full items-center  z-10">  
        <NuxtLink to="" class=" bg-orange-500 text-md font-bold w-full sm:w-[60%] text-center h-16 mt-4 rounded-md flex items-center justify-center text-xl">Descargar</NuxtLink>
          <div class="bg-black w-56 p-1 flex justify-center android">
            <span class=""> Solo para Android</span>
          </div>
    </div>

</div>

  </div>

 
  



 </section>

<section class="bg-black md:h-[100vh] relative py-36 px-10  flex justify-center aling-center">
 



  <div class="rotate-180 absolute overflow-hidden top-[0%] sm:top-[-10%]  left-[0%]">
     <img src="assets\img\bg_nuvecitas2.png" class="z-0 scale-[5] sm:scale-[2] [mask-image:linear-gradient(to_top,transparent_35%,black_70%,black_100%)]" alt="">
  </div>

  <div class="r absolute overflow-hidden top-[82%] sm:top-[66%]  left-[0%]">
     <img src="assets\img\bg_nuvecitas2.png" class="z-0 scale-[5] sm:scale-[2] [mask-image:linear-gradient(to_top,transparent_35%,black_70%,black_100%)]" alt="">
  </div>
  

  <p class="text-white   flex text-center  text-3xl font-serif md:text-5xl justify-center aling-center">
    <i class=" flex flex-col justify-center aling-center">Agradecimientos especiales a la <br><span class="text-yellow-500 ">Korean War Legacy Foundation</span></i>
  </p>


  
</section>

 </div>





</template>

<style>
body{
  background-image: url(~/assets/img/bg_veteranos.png);
  background-size:cover;
  background-attachment:fixed;
  background-repeat: no-repeat;
}

.android{
  border-radius: 0rem 0rem 1rem 1rem;
}
</style>