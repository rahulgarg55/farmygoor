<template>
<div>


<homecomponent/>

  </div>
</template>

<script>


import homecomponent from '../components/homecomponent'
export default {
  middleware: ['isAuthenticated'],
  components: {

  
    homecomponent

  }
 
}
</script>
