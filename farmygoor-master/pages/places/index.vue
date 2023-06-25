<template>
<div>
<h1 class="ma-5 grey--text">All Places</h1>

<datecard/>
<holiday/>
<rooms/>
<mhut/>
<csite/>
</div>
</template>
<script>
import holiday from '../../components/holiday'
import rooms from '../../components/rooms'
import mhut from '../../components/mhut'
import csite from '../../components/csite'
import datecard from '../../components/datecard'
export default{
    components:{
        holiday,
        rooms,
        mhut,
        csite,
        datecard
    }
}
</script>