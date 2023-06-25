<template>
<div><h1>{{hello}}</h1>
<h2 class="ma-5 grey--text">Holiday Apartments</h2>
<v-container class="my-5" >
<v-layout row wrap> 
<v-flex xs6 md4 v-for="place in $store.getters.getInternationalization[$store.getters.getActiveLanguage].holiday" :key="place.restaurant" >
<v-card flat class="ma-3 grey">
<v-responsive>
<v-img
  max-height="150"
  max-width="396"
  :src="place.source"
></v-img>
</v-responsive>
<v-card-text class="text-center">
<div class=" white--text"><h3>Holiday Apartment</h3>
</div>
<div class="white--text mt-5">{{place.place}}
</div>
<div class="white--text ">{{place.rating}}
</div>
<div class="white--text ">{{place.cost}}
</div>
</v-card-text>
<v-card-action>
<v-btn text class="white--text ma-2">Reserve</v-btn>
<v-btn text class="white--text ma-2" @click="fav(place.place,place.rating,place.cost)">ADD TO FAVORITES</v-btn>
</v-card-action>
</v-card>
</v-flex>
</v-layout>
</v-container>

</div>
</template>
<script>
import vue from 'vue';
import axios from 'axios';
import vueaxios from 'vue-axios';
vue.use(vueaxios,axios);
export default{
  data: () =>({
hello:'hii',
  }),
  methods:{
    fav(index1,index2,index3)
    {
     var place = index1;
     var price=index3;
     var rating =index2;
      this.$store.dispatch('setFavorites' ,{place,price,rating});
      this.axios.post(`http://localhost:3000/backend/api/v1/autheticate/res`,place)
      .then((result)=>{
        console.warn(result)
      });
      }
      
  }


}
</script>