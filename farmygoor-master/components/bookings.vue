<template>
<v-form
 ref="form"
    v-model="valid"
    lazy-validation>
<v-row align="center" justify="center">
<v-cols
cols="12" md="6"
class="ma-5">
<v-card class="purple text-center">
<v-card-title class="justify-center white--text font-weight-bold ma-5">{{$store.getters.getInternationalization[$store.getters.getActiveLanguage].tit8}}
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


<div><v-btn  flat class="indigo white--text rounded-pill my-5" @click="validate">{{$store.getters.getInternationalization[$store.getters.getActiveLanguage].tit12}} =></v-btn> 
</div>
</v-card-content>
</v-card>
</v-cols>
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
        }
    },
     methods: {
      validate () {

      
        if(this.$refs.form.validate()){
        this.$router.push('/places');
        var vm = this.from;
        this.$store.dispatch('setFROM',vm
       
        );
        var vm = this.to;
          this.$store.dispatch('setTO',vm
        )
        }
      },
     },
       created(){
         this.from = this.$store.getters.getFROM,
           this.to= this.$store.getters.getTO
         
     }
  
}
</script>