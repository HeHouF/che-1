<template>
  <div class="luyout">
<HelloWlord></HelloWlord>
<router-view></router-view>

  </div>

</template>



<script>
import HelloWlord from '../components/HelloWorld';
// import Home from '../Page/Home';

export default {
    name:'luyout', 
    components:{
        HelloWlord
    }

};
</script>

<style>
 .luyout{
   width: 100%;
   height: 100% ;
   overflow: hidden;
 }
</style>