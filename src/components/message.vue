<template>
    <div>
      <ul>
        <li v-for="(message,index) in messages" :key="message.id">
          <router-link :to="`/home/message/Detail/${message.id}`">{{message.title}}</router-link>
        </li>
      </ul>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
      data(){
        return{
          messages:[]
        }
      },
      mounted(){
        setTimeout(()=>{
          const messages=[
            {
              id:1,
              title:'message001'
            },
            {
              id:2,
              title:'message002'
            },
            {
              id:3,
              title:'message003'
            }
          ]
          this.messages=messages
        },1000)
      }
    }
</script>

<style>

</style>
