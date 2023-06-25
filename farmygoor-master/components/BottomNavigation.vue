<template>
  <v-bottom-navigation
 
    v-model="value"
     :background-color="color" dark shift
  grow
    style="position: fixed;"
 
  >
    <v-btn@click="recents">
 <span>Recents</span>

      <v-icon>mdi-history</v-icon>
    </v-btn>

    <v-btn @click="favorites">
      <span>Favorites</span>

      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn @click="nearby">
      <span>Nearby</span>

      <v-icon>mdi-map-marker</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
<script>
export default {
  data: () => ({ value: 0}),
  methods: {
     recents(){
            this.$router.push('/recents');
        },
     favorites(){
            this.$router.push('/favorites');
        },
     nearby(){
            this.$router.push('/nearby');
        },
  },
  computed:{
    color(){
    switch(this.value){
      case 0: return 'blue-grey'
      case 1: return 'teal'
      case 2: return 'brown'
      default: return 'blue-grey'
    }
    }
  }
}
</script>
