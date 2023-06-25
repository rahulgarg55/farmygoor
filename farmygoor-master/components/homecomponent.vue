<template>
<div>


<h1 class="white--text ma-5">Home</h1>
<h2

<h2 class="white--text ma-5">Accomodation</h2>


<v-container>
<v-row>
<v-col cols="12" md="6" class="cyan darken-4 white--text text-center" >

<v-responsive><v-img src="/holiday6.png"></v-img>
</v-responsive>
<h2 class="ma-5">Get additional discount on first booking</h2>
<v-btn text class="white--text">Visit Now</v-btn>

</v-col>
<v-col cols="12" md="6" class="cyan darken-3 white--text">

<h3>Best Places for Reasonable prices</h3>
we provide best quality accommodation<br>
cheaper price<br>
better facilities

</v-col>
</v-row>
</v-container>
<v-carousel style="margin-top:50px" :show-arrows="false" cycle height="400" hide-delimiters max-height="500">
 <v-carousel-item
      v-for="(item,i) in items"
      :key="i"     
    ><v-row>
    <v-col cols="12" md="6">
    <v-card
    class="mx-auto cyan darken-4"
    max-width="470"
  >
    <v-img
      src="/holiday4.png"
      height="200px"
    ></v-img>

    <v-card-title>
      {{item.name1}}
    </v-card-title>

    <v-card-subtitle>
     {{item.title1}}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="item.show1 = !item.show1"
      >
        <v-icon>{{ item.show1 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="item.show1">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>









    </v-col>
    <v-col cols="12" md="6">
    <v-card
    class="mx-auto teal darken-3"
    max-width="470"
  >
    <v-img
      src="/holiday5.png"
      height="200px"
    ></v-img>

    <v-card-title>
      {{item.name2}}
    </v-card-title>

    <v-card-subtitle>
      {{item.title2}}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="item.show2 = !item.show2"
      >
        <v-icon>{{ item.show2 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="item.show2">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
    </v-col>
    </v-row>
    </v-carousel-item>
</v-carousel>


<v-container class="mx-5">
<h2 class="white--text" >
Why Choose Us ?</h2>
<v-layout row wrap>
<v-flex xs12 md4>
<v-card outlined class="teal darken-4 rounded-lg" style="margin-top:50px;margin-botton:25px;margin-left:25px;margin-right:25px">
<v-card-title class="font-weight-bold white--text" >A family of Thousands</v-card-title>
<v-card-content class="white--text"><h5 class="ma-5">Already hundreds of thounsands has become a part of our family</h5></v-card-content> 
</v-card>
</v-flex>
<v-flex xs12 md4>
<v-card outlined class="teal darken-4 rounded-lg" style="margin-top:50px;margin-botton:25px;margin-left:25px;margin-right:25px">
<v-card-title class="font-weight-bold white--text" >Reasonable prices</v-card-title>
<v-card-content class="white--text"><h5 class="ma-5">You get what you pay for... No hidden charges</h5></v-card-content> 
</v-card>
</v-flex>
<v-flex xs12 md4>
<v-card outlined class="teal darken-4 rounded-lg" style="margin-top:50px;margin-botton:25px;margin-left:25px;margin-right:25px">
<v-card-title class="font-weight-bold white--text" >24X7 Support</v-card-title>
<v-card-content class="white--text"><h5 class="ma-5">We provide 24x7 support in maximum of our services</h5></v-card-content> 
</v-card>
</v-flex>
</v-layout>
</v-container>

<h2 class="white--text ma-5">Products</h2>
<v-container class="ma-5">
<v-layout row wrap>
<v-flex xs12 sm6 md6>
<v-card>hii
</v-card>
</v-flex>
<v-flex xs12 sm6 md6>
<v-card>
</v-card>
</v-flex>
</v-layout>
</v-container>








<Footer/>
</div>
</template>
<script>
import Footer from '/components/Footer'
export default{
    data(){

   return {
       
        items:[
          {
            name1: 'Holiday Apartment',
          name2:'Rooms Available',
          title1: 'Starting from just Rs999',
          title2: 'Starting from just Rs999',
          show1:false,
          show2:false
          },
          {
            name1: 'Mountain hut',
          name2:'Camping Site',
          title1: 'Starting from just Rs999',
          title2: 'Starting from just Rs999',
          show1:false,
          show2:false},
        
        ]
     

    }
    },
    components:{
      Footer
    }
  

}
</script>
