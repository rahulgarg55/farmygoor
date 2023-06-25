<template>
<div class="projects">
<v-layout row wrap> 
<v-flex xs9 md10>
<h1 class="ma-4 grey--text">{{$store.getters.getInternationalization[$store.getters.getActiveLanguage].pro}}</h1>
</v-flex>
<v-flex xs3 md2><v-btn text class="ma-5 grey white--text" router to="/cart">Go to Cart</v-btn>
</v-flex>
</v-layout>

<v-container class="my-5">
<v-layout row wrap> 
<v-flex xs6 md4 v-for="product in $store.getters.getInternationalization[$store.getters.getActiveLanguage].products" :key="product.restaurant">
<v-card flat class="grey ma-3">
<v-responsive>
<v-img
  height="250"
  max-width="396"
  :src="product.source"
></v-img>
</v-responsive>
<v-card-text class="text-center">
<div class=" white--text"><h1>{{product.restaurant}}</h1>
</div>
<div class="white--text mt-5">{{product.product}}
</div>
<div class="white--text mt-5">{{product.rating}}
</div>
<div class="white--text mt-5">{{product.supplier}}
</div>
</v-card-text>
<v-card-action>
<v-btn text class="ma-5 grey white--text">Add to cart</v-btn>
<v-btn text class="grey white--text align-right" router :to="product.to">Buy Now</v-btn>
</v-card-action>
</v-card>
</v-flex>

</v-layout>
</v-container>


</div>
</template>

<script>
 

  export default {
  
    
  


  }
</script>
