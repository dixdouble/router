<template>
    <div>
      <p>ID:{{$route.params.id}}</p>
      <ul>
        <li>id:{{$route.params.id}}</li>
        <li>title:{{messageDetail.title}}</li>
        <li>content:{{messageDetail.content}}</li>
      </ul>
    </div>
</template>

<script>

    export default {
      data(){
        return{
          messageDetail:{}
        }
      },
      mounted(){
        setTimeout(()=>{
          const allMessageDetails = [
            {
              id:1,
              title:'message001',
              content:'message001'
            },
            {
              id:2,
              title:'message002',
              content:'message002'
            },
            {
              id:3,
              title:'message003',
              content:'message003'
            }
          ]
          this.allMessageDetails = allMessageDetails
        },1000)
      },
      watch:{
        $route:function (value) {
          const id = value.params.id*1
          this.messageDetail = this.allMessageDetails.find(detail => detail.id===id)
        }
      }
    }
</script>

<style>

</style>
