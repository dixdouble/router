<template>
    <div>
      <p2>home</p2>
      <div>
        <ul class="nav nav-tabs">
          <li><router-link to="/home/news">news</router-link></li>
          <li><router-link to="/home/message">message</router-link></li>
        </ul>
      </div>
      <hr>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {}
</script>

<style >

</style>
