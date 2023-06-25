<template>
<div>
<v-layout row wrap>
<v-flex xs12 md5 class="white--text ma-5">
<h1>Events</h1>
</v-flex>
<v-flex xs12 md3 class="text-right white--text my-5 mx-2" style="margin-top:25px">
  <v-menu offset-y>
        <template v-slot:activator="{ on,}">
          <v-btn
         
            class="cyan darken-4 white--text"

           
            v-on="on"
          >   <v-icon left>mdi-chevron-down</v-icon>
            <span>Sort By</span>
         
          </v-btn>
        </template>
        <v-list  class="cyan darken-4">
        <v-list-item>
        <v-list-item-title class="white--text">
       
        Nearest First
        </v-list-item-title>
        <v-divider/>
        </v-list-item>
        </v-list>
        </v-menu>
</v-flex>
<v-flex xs12 md3 class="text-right ma-3 white--text">
<v-text-field v-model="search" prepend-icon="mdi-magnify" placeholder="Search" color="white" class="white--text"></v-text-field>
</v-flex>


</v-layout>
<v-container>
<v-layout row wrap> 
<v-flex xs6 md4 v-for="product in filteredarray" :key="product.restaurant">
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
export default{
    data(){
        return{
            schbar: false,
           search:'',
            array:[
         { restaurant: 'Breads',rating: 'rating - 4.5',product: 'Source - Wheat',source: '/bread.png',supplier: 'Amul', to: '/cart',distance: '60km'},
        {restaurant: 'Milk',rating: 'rating - 4.2',product: 'Source - dairy product',source: '/milk.png',supplier: 'Dairy Queen', to: '/cart',distance: '60km'},
        {restaurant: 'Cheese',rating: 'rating - 4.2',product: 'Source - dairy product',source: '/cheese.png',supplier: 'AaNCHAL', to: '/cart',distance: '60km'},
          { restaurant: 'Eggs',rating: 'rating - 4.5',product: 'Source -Poultry',source: '/eggs.png',supplier: 'Amul', to: '/cart', distance: '60km'},
        {restaurant: 'Drinks',rating: 'rating - 4.2',product: 'Source - wheat',source: '/drinks.png',supplier: 'Beera', to: '/cart', distance: '60km'},
        {restaurant: 'Wallnuts',rating: 'rating - 4.2',product: 'Source - nuts',source: '/nuts.png',supplier: 'walnut.io' , to: '/cart', distance: '60km'}
        ],
        }
    },
  
    computed:{
        filteredarray: function(){
        
            return this.array.filter((product) => {
                return product.restaurant.toLowerCase().match(this.search.toLowerCase());
            });
            
        },
     

    }

}
</script>