<template>
  <v-footer
    dark
    padless
    style="margin-bottom:57px;margin-top: 78px;"

  >
    <v-card
      flat
      tile
      class="purple darken-4 white--text text-center"
      
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
          {{$store.getters.getInternationalization[$store.getters.getActiveLanguage].footer}}
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Farmly</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram'
    ]
  })
}
</script>
