<template>
<v-layout row wrap>
<v-flex xs8 md8 justify-center>
<v-card>
<v-card-title class="font-weight-bold grey--text ma-5">{{$store.getters.getInternationalization[$store.getters.getActiveLanguage].feedback1}}
</v-card-title>
<v-card-content>
<v-textarea class="ma-5" :label="$store.getters.getInternationalization[$store.getters.getActiveLanguage].feedback2"></v-textarea>
<div><v-btn text class="ma-5 grey--text">{{$store.getters.getInternationalization[$store.getters.getActiveLanguage].submit}}</v-btn></div>
</v-card-content>
</v-card>
</v-flex>
</v-layout>
</template>
