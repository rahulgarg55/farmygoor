<template>
<div><h2 class="ma-5 grey--text">Your favorites will be shown here</h2>
<div class="ma-5" v-for="(favorite,index) in $store.getters.getFavorites" :key="favorite.place">
<v-card class="grey white--text">
<div class="ma-5">
<v-row>
<v-col cols="12" md="6">
<h3>{{favorite.place}}</h3>
{{favorite.price}}<br>
{{favorite.rating}}</v-col>
<v-col cols="12" md="6" class="text-right">
 <v-btn text @click="close(index)" class="white--text">Remove from favorites</v-btn>

</v-col>
</v-row>

</div>
</v-card>

</div>





</div>
</template>
<script>
export default{
    data: () =>({
  
       
       

    }),
    methods:{
      close(index){
        this.$store.dispatch('setFAV',{index});
      }
    }
 
       
    
}
</script>