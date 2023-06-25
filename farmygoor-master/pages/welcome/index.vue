<template>
<v-container class="ma-5">
<div class="font-weight-bold grey--text">
<h1>THANKS FOR SIGNING UP</h1>
<br><br>
</div>
<v-btn text @click="gotohome" class="grey--text ma-5">CILCK HERE TO GO TO HOMEPAGE</v-btn>
<div><v-btn text class="ma-5 grey--text" @click="login">Login</v-btn></div>


</v-container>
</template>
<script>
export default{
    methods:{
        gotohome(){
            this.$router.push('/');
        },
         login(){
            this.$router.push('/login');
        }
    }
}
</script>