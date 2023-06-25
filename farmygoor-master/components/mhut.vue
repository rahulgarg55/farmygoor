<template>
<div>
<h2 class="ma-5 grey--text">Mountain huts</h2>
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
<div class=" white--text"><h3>Mountain huts</h3>
</div>
<div class="white--text mt-5">{{place.place}}
</div>
<div class="white--text ">{{place.rating}}
</div>
<div class="white--text ">{{place.cost}}
</div>
</v-card-text>
<v-card-action>
<v-btn text class="white--text">Reserve</v-btn>
</v-card-action>
</v-card>
</v-flex>
</v-layout>
</v-container>
</div>
</template>
<script>
export default{

}
</script>