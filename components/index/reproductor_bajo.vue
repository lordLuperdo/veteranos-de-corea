<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useDataStore } from '~/store/data_store'

const store = useDataStore()
const pistas = store.pistas

// cancioncita  actual
const currentIndex = ref(0)
const currentTrack = ref(pistas[currentIndex.value] || {})

//para de audio y controles pai
const audioRef = ref(null)
const isPlaying = ref(false)
const currentTime = ref(0)
const duration = ref(0)

const togglePlay = () => {
  if (!audioRef.value) return
  if (audioRef.value.paused) {
    audioRef.value.play()
    isPlaying.value = true
  } else {
    audioRef.value.pause()
    isPlaying.value = false
  }
}

const updateTime = () => {
  currentTime.value = audioRef.value.currentTime
}

const updateDuration = () => {
  duration.value = audioRef.value.duration
}

const formatTime = (time) => {
  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time % 60).toString().padStart(2, '0')
  return `${minutes}:${seconds}`
}

const nextTrack = () => {
  currentIndex.value = (currentIndex.value + 1) % pistas.length
  loadTrack()
}

const prevTrack = () => {
  currentIndex.value = (currentIndex.value - 1 + pistas.length) % pistas.length
  loadTrack()
}

const loadTrack = () => {
  if (!pistas.length) return
  currentTrack.value = pistas[currentIndex.value]
  isPlaying.value = false
  audioRef.value.pause()
  audioRef.value.src = currentTrack.value.aud
  audioRef.value.load()
  audioRef.value.onloadedmetadata = () => {
    duration.value = audioRef.value.duration
  }
  audioRef.value.play()
  isPlaying.value = true
}

watch(currentIndex, () => {
  loadTrack()
})

onMounted(() => {
  if (audioRef.value) {
    audioRef.value.addEventListener('timeupdate', updateTime)
    audioRef.value.addEventListener('loadedmetadata', updateDuration)
  }

  if (pistas.length) {
    loadTrack()
  }
})

onUnmounted(() => {
  if (audioRef.value) {
    audioRef.value.removeEventListener('timeupdate', updateTime)
    audioRef.value.removeEventListener('loadedmetadata', updateDuration)
  }
})
</script>

<template>
  <div
    v-if="pistas.length"
    class="fixed pt-10 bottom-0 left-0 right-0 h-[19vh] bg-red-800 text-white flex items-center flex-col px-6 pb-20 shadow-lg z-50"
  >
  <div class="fixed pt-10 bottom-0 left-0 right-0 h-[19vh] bg-[url(~/assets/img/bg_nuvecitas2.png)] bg-[center_17rem] text-white flex items-center flex-col px-6 pb-20 shadow-lg z-50">
     <!-- Audio oculto -->
     <audio ref="audioRef"></audio>

<!-- Info de la canción -->
<div class="flex items-center gap-4 w-1/3 relative  flex flex-col w-full">
  <img
    :src="currentTrack.img1 || 'https://via.placeholder.com/56'"
    alt="Portada"
    class="w-24 h-24 object-cover rounded-full absolute top-[-250%] left-50% border-red-950  border-4"
  />
  <div class="text-sm">
    <p class="font-semibold truncate text-center">{{ currentTrack.name || 'Sin nombre' }}</p>
    <p class="text-gray-400 truncate text-center">{{ currentTrack.description || 'Sin descripción' }}</p>
  </div>
</div>

<!--  malparidooooooooooooooooos Controles -->
<div class="flex flex-col items-center justify-center flex-grow px-20">
  <div class="flex items-center gap-4">
    <button @click="prevTrack" class="text-gray-400 hover:text-white text-lg"><Icon name="basil:fast-rewind-solid" class="text-white"/></button>
    <button
      @click="togglePlay"
      class="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center hover:scale-105 transition"
    ><Icon v-if="isPlaying"  name="basil:pause-solid"/>
    <Icon v-if="!isPlaying"  name="basil:play-solid"/>
     
    </button>
    <button @click="nextTrack" class="text-gray-400 hover:text-white text-lg"><Icon name="basil:fast-forward-solid" class="text-white"/></button>
  </div>

  <!-- Barra de progreso -->
  <div class="flex items-center gap-2 w-full text-xs mt-1">
    <span class="text-gray-400 w-10 text-right">{{ formatTime(currentTime) }}</span>
    <div class="flex-1 h-1  w-full bg-gray-700 rounded overflow-hidden">
      <div
        class="h-full bg-white transition-all duration-200"
        :style="{ width: (currentTime / duration * 100 || 0) + '%' }"
      ></div>
    </div>
    <span class="text-gray-400 w-10">{{ formatTime(duration) }}</span>
  </div>
</div>

  </div>
   
    
  </div>
</template>
