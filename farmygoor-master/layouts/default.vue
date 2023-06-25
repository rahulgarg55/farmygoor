<template>
  <v-app style=" background-image: url('/bg.png');">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
     
      app
  class="deep-purple"
    >
    
      <v-list >
        <v-list-item
          v-for="(item, i) in $store.getters.getInternationalization[$store.getters.getActiveLanguage].sideNav"
          :key="i"
          :to="item.to"
          router
          exact
       
           
        >
          <v-list-item-action   class="white--text">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content    class="white--text"
         >
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click.stop="miniVariant = !miniVariant"   class="white--text">
          <v-list-item-action   class="white--text">
            <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
          </v-list-item-action>
          <v-list-item-content   class="white--text">
            {{ miniVariant ? '' : 'minimize' }}
          </v-list-item-content>
        </v-list-item>
          
         
      </v-list>
      
     
   
     
      
     
   
     

      
     
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      color="purple"
    >
  
      
   
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title class="white--text" v-text="$store.getters.getInternationalization[$store.getters.getActiveLanguage].appName" />
      <v-spacer />
      <v-menu offset-y transition="fab-transition">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
         
            flat class="indigo white--text rounded-pill"
           width="130px"
            v-bind="attrs"
            v-on="on"
          >   <v-icon left>mdi-chevron-down</v-icon>
            <span>{{$store.getters.getInternationalization[$store.getters.getActiveLanguage].lang}}</span>
         
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(content, _key) in $store.getters.getInternationalization"
            :key="_key"
          >
            <v-list-item-title><v-btn @click="$store.dispatch('setActiveLanguage',_key)" text class="grey--text" width="140px">{{ _key }}</v-btn></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn flat class="indigo white--text rounded-pill mx-2" @click="login">{{$store.getters.getInternationalization[$store.getters.getActiveLanguage].tit13}}</v-btn>
           <v-btn flat class="indigo white--text rounded-pill" @click="signup">{{$store.getters.getInternationalization[$store.getters.getActiveLanguage].tit14}}</v-btn>


<v-menu offset-y transition="fab-transition">
    <template v-slot:activator="{on}">
<v-btn v-on="on" flat class="indigo white--text rounded-pill mx-2" width="90px">
<v-icon left>mdi-chevron-down</v-icon>
<span>{{$store.getters.getInternationalization[$store.getters.getActiveLanguage].tit1}}</span>
</v-btn>
</template>
<v-list>
<v-list-item v-for="more in $store.getters.getInternationalization[$store.getters.getActiveLanguage].mores" :key="more.name" router :to="more.rote" >
<v-list-item-title class="grey--text">{{more.name}}</v-list-item-title>
</v-list-item>
</v-list>
    </v-menu>
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
        flat class="indigo white--text rounded-pill"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
     
   
    </v-main>
    <v-card color="purple"><hii</v-card>



    <BottomNavigation/>




    <!--rightnav-->
     <v-navigation-drawer
      v-model="rightDrawer"
      :right="true"
      temporary
      fixed
      width="300px"
      class="indigo"
    >
      <v-list >
        <v-list-group
        :value="false"
        class="white--text"
        prepend-icon="mdi-account-circle"
      >
        <template v-slot:activator>
          <v-list-item-title class="white--text">{{$store.getters.getInternationalization[$store.getters.getActiveLanguage].tit3}}</v-list-item-title>
        </template>

      
        

          <v-list-item
            v-for="acc in $store.getters.getInternationalization[$store.getters.getActiveLanguage].acco"
            :key="acc.title"
            router :to="acc.to"
            class="mx-5"
          > <v-icon>mdi-chevron-right</v-icon>
            <v-list-item-title v-text="acc.title" class="text-center white--text"></v-list-item-title>

           
          </v-list-item>
       

      
      </v-list-group>

       

      <v-list-group
        :value="false"
        prepend-icon="mdi-account-circle"
        class="white--text"
      >
        <template v-slot:activator>
          <v-list-item-title class="white--text">{{$store.getters.getInternationalization[$store.getters.getActiveLanguage].tit2}}</v-list-item-title>
        </template>

        <v-list-group
          :value="false"
          no-action
          sub-group
          class="white--text"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title class="white--text">{{$store.getters.getInternationalization[$store.getters.getActiveLanguage].equip}}</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="equipment in $store.getters.getInternationalization[$store.getters.getActiveLanguage].equipments"
            :key="equipment.title"
            link
           
            router :to="equipment.to"
          >
            <v-list-item-title class="white--text" v-text="equipment.title"></v-list-item-title>

            <v-list-item-icon>
              <v-icon>{{equipment.icon}}</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>

        <v-list-group
          no-action
          sub-group
           class="white--text"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title class="white--text">{{$store.getters.getInternationalization[$store.getters.getActiveLanguage].pro}}</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
           v-for="(crud, i) in $store.getters.getInternationalization[$store.getters.getActiveLanguage].cruds"
          :key="i"
          :to="crud.to"
          router
          exact
          >
            <v-list-item-title class="white--text" v-text="crud.title"></v-list-item-title>

            <v-list-item-icon>
              <v-icon>{{ crud.icon }}</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
      </v-list-group>
      </v-list>
    </v-navigation-drawer>  
   
    


  </v-app>
</template>

<script>
import BottomNavigation from '../components/BottomNavigation'


export default {
  data () {
    return {    
      clipped: true,
      drawer: false,
      fixedFooter: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      appName: this.$store.getters.getInternationalization[this.$store.getters.getActiveLanguage].appName,
      valve: true,
                 
    }
  },



  components: {
    BottomNavigation,
  
  },






  methods: {
login(){
            this.$router.push('/login');
        },
        signup(){
            this.$router.push('/signup');
        },
       journey(){
            this.$router.push('/journey');
        },
 
        
  },




  computed: {
  }
}
</script>
