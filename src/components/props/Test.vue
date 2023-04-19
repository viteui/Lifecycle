<template>
    <div>
        1:{{ JSON.stringify(detailInfo) }}
        <Two :detailInfo="detailInfo"></Two>
    </div>
</template>

<script>
import Two from './Two.vue'
export default {
    name: 'Test',
    components:{
        Two
    },
    props:{
        detailInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    },


    data() {
        return {
            
        };
    },
    created(){
        console.log("created")
    },
    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>

</style>