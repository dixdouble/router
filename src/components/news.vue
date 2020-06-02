<template>
    <div>
      <ul>
        <li v-for="(news,index) in newArr1" :key="index">{{news}}</li>
        <li v-for="(key,value,index) in newobj" :key="index">键：{{value}}值：{{key}}索引：{{index}}</li>
      </ul>
    </div>
</template>

<script>
    export default {
      data (){
        return {
          newArr1:[
            '数组1',
            '数组2',
            '数组3'
          ],
          newobj:{
            name:'111',
            big:'222',
            qqq:'333'
          }
        }
      }
    }
</script>

<style>

</style>
