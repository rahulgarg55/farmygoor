<template>
<div class="projects">
<v-layout row wrap> 
<v-flex xs9 md10 class="text-center"><v-card flat class="indigo darken-4 white--text ma-5" width="220">
<h1 class="ma-4">{{$store.getters.getInternationalization[$store.getters.getActiveLanguage].pro}}</h1>
</v-card></v-flex>
<v-flex xs3 md2><v-btn text class="ma-5 cyan darken-4 white--text" router to="/cart">Go to Cart</v-btn>
</v-flex>
</v-layout>

<v-container class="my-5">
<v-layout row wrap> 
<v-flex xs6 md4 v-for="product in $store.getters.getInternationalization[$store.getters.getActiveLanguage].products" :key="product.restaurant">
<v-card flat class="cyan darken-4 ma-3">
<v-responsive>
<v-img
  height="250"
  max-width="396"
  :src="product.source"
><v-flex class="text-right"><v-btn text class="black--text justify-right"><v-icon>mdi-dots-vertical</v-icon></v-btn></v-flex></v-img>
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
<v-btn text class="ma-5 indigo darken-4 white--text">Add to cart</v-btn>
<v-btn text class="indigo darken-4 white--text align-right" router :to="product.to">Buy Now</v-btn>
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
