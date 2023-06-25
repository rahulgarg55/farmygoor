<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
  <v-alert color="error" :value="error" icon="close">Something went wrong
  </v-alert>
  <v-container bg fill-height grid-list-md text-center>
  <v-layout row wrap align-center>
  <v-flex xs12 md6>
  <v-card>
  <v-card-title class="justify-center grey--text">Login</v-card-title>
   <v-card-content> 
  
    <v-text-field class="ma-5"
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      prepend-icon="mdi-message"
      required
    ></v-text-field>
    
    <v-text-field class="ma-5"
      v-model="password"
      :rules="passrules"
      label="Password"
      type="password"
      prepend-icon="mdi-key"
      required
    ></v-text-field>

    
    <v-checkbox class="ma-2"
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Are you sure you want to login?"
      required
    ></v-checkbox>
  
    <v-btn text class="grey--text" :disabled="!valid"
    @click="validate">Submit
    </v-btn>

   

    <v-btn
    text
      color="grey"
      class="ma-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

   
    </v-card-content>
    </v-card>
    </v-flex>
    </v-layout>
    </v-container>
  </v-form>
</template>
<script>
  export default {
    data: () => ({
      valid: true,
    
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      password:'',
      passrules: [
         v => !!v || 'Password is required',
         v => (v && v.length >= 8) || 'Password must contain at least 8 characters',

      ],
     
      checkbox: false,
      error: false,
     

    
    
    
    }),

    methods: {   
      validate () {
        if(this.$refs.form.validate()){
   var email =  this.email;
   var password = this.password;
         this.$store.dispatch('login' , {
           email,password
         })
        
        } 
        },
      reset () {
        this.$refs.form.reset()
      },
     
    },
  }
</script>