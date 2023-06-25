<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    

  ><v-container text-center >
  <v-layout row wrap >
  <v-flex xs12 md6 >
  <v-spacer></v-spacer>
  <v-card class="ma-5">
  <v-card-title class="justify-center grey--text">Signup</v-card-title>
   <v-card-content> 
    <v-text-field class="ma-5"
      v-model="name"
      :counter="20"
      :rules="nameRules"
      label="Name"
      prepend-icon="mdi-account-circle"
      required
    ></v-text-field>

    <v-text-field class="ma-5"
      v-model="password"
      :rules="passrules"
      label="Password"
      prepend-icon="mdi-key"
      required
    ></v-text-field>
        <v-text-field class="ma-5"
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      prepend-icon="mdi-message"
      required
    ></v-text-field>

    <v-select class="ma-5"
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Age is required']"
      label="Age"
      required
    ></v-select>

    <v-checkbox class="mx-5"
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>
    <div class="grey--text mx-3">Already have an account  <v-btn text class="grey--text mx-3" @click="login">
    Login</v-btn></div>
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
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      password:'',
      passrules: [
         v => !!v || 'Password is required',
         v => (v && v.length >= 10) || 'Password must contain at least 8 characters',

      ],

      select: null,
      items: [
        'below 18',
        '18-45',
        '46-60',
        'Above 60',
      ],
      checkbox: false,
    
    
    
    }),

    methods: {
      validate () {
        if(this.$refs.form.validate())
        this.$router.push('/welcome');
      
      },
      reset () {
        this.$refs.form.reset()
      },
       login(){
            this.$router.push('/login');
        },

     
    },
  }
</script>