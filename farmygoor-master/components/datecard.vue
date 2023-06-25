<template>
<v-form
 ref="form"
    v-model="valid"
    lazy-validation>
<v-row align="center" justify="center" v-if="!hidden">
<v-col
cols="12" sm="12" md="12"
class="ma-5">
<v-card class="grey text-center">
<v-card-title class="justify-center white--text font-weight-bold ma-5">{{$store.getters.getInternationalization[$store.getters.getActiveLanguage].tit15}}
</v-card-title>
<v-card-content class="ma-5 white--text">{{$store.getters.getInternationalization[$store.getters.getActiveLanguage].tit6}} 




<v-menu offset-y>
    <template v-slot:activator="{on}">
<v-text-field v-on="on" color="white" 
:label="$store.getters.getInternationalization[$store.getters.getActiveLanguage].tit5" :value="from" class="mx-5 white--text"
:rules="[v => !!v || $store.getters.getInternationalization[$store.getters.getActiveLanguage].tit9]"
prepend-icon="mdi-chevron-down">
</v-text-field>

</template>
<v-date-picker v-model="from"></v-date-picker>
    </v-menu>




{{$store.getters.getInternationalization[$store.getters.getActiveLanguage].tit10}}

 {{$store.getters.getInternationalization[$store.getters.getActiveLanguage].tit7}}


<v-menu offset-y>
    <template v-slot:activator="{on}">
<v-text-field v-on="on" color="white" :rules="[v => !!v || $store.getters.getInternationalization[$store.getters.getActiveLanguage].tit9]" :label="$store.getters.getInternationalization[$store.getters.getActiveLanguage].tit5" :value="to" class="mx-5 white--text" prepend-icon="mdi-chevron-down">
</v-text-field>

</template>
<v-date-picker v-model="to"></v-date-picker>
    </v-menu>
{{$store.getters.getInternationalization[$store.getters.getActiveLanguage].tit11}}


<div><v-btn class="my-5" @click="validate">{{$store.getters.getInternationalization[$store.getters.getActiveLanguage].tit16}}</v-btn> 
</div>
</v-card-content>
</v-card>
</v-col>
</v-row>
</v-form>
</template>
<script>
export default{
    data(){
        return{
           
            valid:true,
            from:null,
            to:null,
            hidden:false,
        }
    },
     methods: {
      validate () {

      
        if(this.$refs.form.validate()){
       
        var vm = this.from;
        this.$store.dispatch('setFROM',vm
       
        );
        var vm = this.to;
          this.$store.dispatch('setTO',vm
        );
        this.hidden=!this.hidden
        }
      },
     },
       created(){
         this.from = this.$store.getters.getFROM,
           this.to= this.$store.getters.getTO
         
     }
  
}
</script>