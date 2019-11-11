<template>
  <div class="page-wrap">

  </div>
</template>

<script>
export default {
    props:{
        id:String,
        data:Object
    },
    methods:{
        async request(){
            this.data = await this.$store.dispatch('product/requestCompanyDetail',{cId:this.id});
            console.log(this.data);
            
        }
    },
    created(){
        this.request();       
    }
}
</script>

<style>

</style>