<template>
    <header class="py-5 flex justify-center gap-5">

     

        <div class="bg-red-800 w-[90%] h-14 rounded-full overflow-hidden p-1 px-2 flex items-center">
            <img src="" alt="">
       
        <div class="">
            <label for=""></label>
            <input type="text" name="" id="" class="rounded-full h-10 w-44 px-3" placeholder="Buscar">
        </div>

        <nav class="ml-20 hidden">
           <ul class="flex justify-around gap-6">
                <li class="">
                    <button class=" text-white">Favoritos</button>
                </li>
                <li class="">
                    <NuxtLink to=" " class="text-white">Museo</NuxtLink>
                </li>
                <li class="">
                    <NuxtLink to=" " class="text-white">Veteranos</NuxtLink>
                </li>
            </ul> 
        </nav>

        <nav class="ml-3 flex flex-grow justify-center">
           <ul class="flex justify-around gap-4">
                <li class="">
                    <button class=" text-white flex bg-orange-400 rounded-full p-1"> 
                        <Icon name="material-symbols:favorite" class="text-white text-xl items-center flex"/>
                    </button>
                </li>
                <li class="">
                    <NuxtLink to="https://funvecorea.org/?fbclid=IwY2xjawKJgh5leHRuA2FlbQIxMABicmlkETF4SGpxVFl5dlNFN2czdExyAR72mcxNh3_-zwO6bhQTp8bQtt60fWds4IX8YTDo_FKjMTLOkO6Ch2b0XMsWkg_aem_hAyV5fXnnImZ5h7p-Kix1A " target="_LANG" class="text-white flex bg-orange-400 rounded-full p-1">
                        <Icon name="material-symbols:web-traffic" class="text-white text-xl items-center flex"/>
                    </NuxtLink>
                </li>
                <li class="">
                    <NuxtLink to=" https://museoveteranos.org/" class="text-white flex bg-orange-400 rounded-full p-1" target="_LANG">
                        <Icon name="material-symbols:book-2" class="text-white text-xl items-center flex"/>
                    </NuxtLink>
                </li>
            </ul> 
        </nav>
        </div>
        
    </header>

</template>