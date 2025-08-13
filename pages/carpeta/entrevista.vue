<script setup>
import { useDataStore } from '~/store/data_store';
const DataStore = useDataStore()
</script>

<template>
    <main class="px-5 flex flex-col justify-center">

        <h1 class=" text-center mt-3 mb-2 font-bold text-2xl">{{ DataStore.detail_video.name }}</h1>
        <div class="bg-black rounded-md"><video :src="DataStore.detail_video.aud" 
         controls
        
        >
            
        </video></div>
        
    </main>

    <section class="bg-red-700 flex flex-col mx-5 mt-4 rounded-md p-5 ">

        <p class="text-white text-center mb-4">{{ DataStore.detail_video.description }}</p>
  
         

        <div class="flex gap-2 mb-2">
            <div class="bg-orange-500 p-1 flex items-center rounded-md">
                <h3 class="text-white text-center">Nacimiento</h3>
            </div>
            <div class="bg-white p-1 rounded-md flex justify-center items-center">
                <p class="text-center">{{ DataStore.detail_video.nacimiento }}</p>
                
            </div>
        </div>

        <div class="flex gap-2 mb-2">
            <div class="bg-orange-500 p-1 flex items-center rounded-md">
                <h3 class="text-white text-center">Servicio</h3>
            </div>
            <div class="bg-white p-1 rounded-md flex justify-center items-center">
                <p class="text-center">{{ DataStore.detail_video.Servicio }}</p>
                
            </div>
        </div>

        <div class="flex gap-2 mb-2">
            <div class="bg-orange-500 p-1 flex items-center rounded-md">
                <h3 class="text-white text-center">Reclutamiento</h3>
            </div>
            <div class="bg-white p-1 rounded-md flex justify-center items-center">
                <p class="text-center">{{ DataStore.detail_video.tipo_r }}</p>
                
            </div>
        </div>
    </section>
</template>