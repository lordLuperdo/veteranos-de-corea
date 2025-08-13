import { defineStore } from 'pinia'

import fredo from '~/assets/img/img1x1/Alfredo_Forero.png'
import Carlos from '~/assets/img/img1x1/Carlos Julio Mora Zea.png'
import cuestas from '~/assets/img/img1x1/Carlos_Cuestas.png'
import domingo from '~/assets/img/img1x1/Domingo_Gil_Soler.png'
import Eduardo from '~/assets/img/img1x1/Eduardo_Arguello_Montenegro.png'
import Epifanio from '~/assets/img/img1x1/Epifanio_Rodriguez_Nuñez.png'

import imagen6 from "~/assets/img/general/logo_vet.png"
import imagen7 from "~/assets/img/general/logo_web_corea.jpg"





export const useDataStore = defineStore('data', () => {
 const redes_info = [
    {
      title: "Facebook",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdu64Kd_uo0jxcd1IvtjkX0TO4rt-k9XFh4A&s",
      texo: "Siguenos en nuestra página de Facebook para tener un contacto más cercano.",
      link: "https://www.facebook.com/funvecorea.veteranosdelaguerradecorea"
    },
    {
        title: "Web",
        photo: imagen7,
        texo: "Enterate de lo que tenemos nosotros en nuestro blog, y enterate quienes somos.",
        link: "https://funvecorea.org/?fbclid=IwY2xjawKJgh5leHRuA2FlbQIxMABicmlkETF4SGpxVFl5dlNFN2czdExyAR72mcxNh3_-zwO6bhQTp8bQtt60fWds4IX8YTDo_FKjMTLOkO6Ch2b0XMsWkg_aem_hAyV5fXnnImZ5h7p-Kix1A"
      },
      {
        title: "Museo",
        photo: imagen6,
        texo: "Mira nuestra historia de una manera más específica y detallada",
        link: "https://museoveteranos.org/"
      },
     


      
 ]

 const pistas = [

    {
    id:1,
    name:"Alfredo Forero",
    description:"Subteniente, comandante del segundo pelotón de fusileros de la compañía B – coronel (r)",
    aud:"https://firebasestorage.googleapis.com/v0/b/proyecto-olaf.appspot.com/o/Alfredo_Forero.mp4?alt=media&token=9e54a360-c931-4e40-a01a-15d6a577cc3a",
    img1 : fredo,
    img2 : "",
    banner : true,
    nacimiento:"3 de febrero de 1930 en Moniquirá – Boyacá ",
    Servicio:"•	Enero 1953- julio 1954 (7 meses en guerra y 11 meses como instructor de tropas colombianas que harían los remplazos correspondientes).",
    recuerdos:"",
    tipo_r:"Solicitud de voluntario"
    },
    {
        id:2,
        name:"Carlos Julio",
        description:"Entrevista a Roberto Ramirez Cárdenas, soldado raso del cuaro batallón",
        aud:"https://firebasestorage.googleapis.com/v0/b/proyecto-olaf.appspot.com/o/Carlos%20Julio%20Mora%20Zea.mp4?alt=media&token=d526fc7c-0d91-48dc-8bcc-82d9c973f079",
        img1:Carlos,
        img2:"",
        banner:true,
        nacimiento:"",
        Servicio:"",
        recuerdos:"",
        tipo_r:""
        },
        {
            id:3,
            name:"Carlos Cuestas",
            description:" Entrevista a Roberto Ramirez Cárdenas, soldado raso del cuaro batallón",
            aud:"https://firebasestorage.googleapis.com/v0/b/proyecto-olaf.appspot.com/o/Carlos_Cuestas.mp4?alt=media&token=9246e1ae-adb7-49bc-b061-b00614809dcd",
            img1:cuestas,
            img2:"",
            banner:true,
            nacimiento:"",
            Servicio:"",
            recuerdos:"",
            tipo_r:""
        },
        {
          id:4,
          name:"Domingo Gil",
          description:"jytfjhfjhgfjhfjgjfjghchgvjvvhhhvvhggfghhgg hhgvgvvjhvjhhbh",
          aud:"https://firebasestorage.googleapis.com/v0/b/proyecto-olaf.appspot.com/o/Domingo_Gil_Soler.mp4?alt=media&token=36173b00-7d7f-4c94-a9bf-b2a052512222",
          img1:domingo,
          img2:"",
          banner:false,
          nacimiento:"",
          Servicio:"",
          recuerdos:"",
          tipo_r:""
      },
      {
        id:5,
        name:"Eduardo Arguello",
        description:"jytfjhfjhgfjhfjgjfjghchgvjvvhhhvvhggfghhgg hhgvgvvjhvjhhbh",
        aud:"https://firebasestorage.googleapis.com/v0/b/proyecto-olaf.appspot.com/o/Eduardo_Arguello_Montenegro.mp4?alt=media&token=15214a7a-d752-4d01-bbb2-260b515c8e11",
        img1:Eduardo,
        img2:"",
        banner:false,
        nacimiento:"",
        Servicio:"",
        recuerdos:"",
        tipo_r:""
    },
     {
        id:6,
        name:"Epifanio Rod.",
        description:"jytfjhfjhgfjhfjgjfjghchgvjvvhhhvvhggfghhgg hhgvgvvjhvjhhbh",
        aud:"https://firebasestorage.googleapis.com/v0/b/proyecto-olaf.appspot.com/o/Epifanio_Rodriguez_Nuñez.mp4?alt=media&token=f70f0f14-4642-4fde-9bb8-77c90b9b2aa2",
        img1:Epifanio,
        img2:"",
        banner:false,
        nacimiento:"",
        Servicio:"",
        recuerdos:"",
        tipo_r:""
    },
   
  


 ]

  const detail_video= ref(null)

 const currentIndex = ref(0)


 return {redes_info, pistas, currentIndex, detail_video};
})