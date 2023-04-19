<template>
    <div>
        2: {{ JSON.stringify(detailInfo) }}
    </div>
</template>

<script>

export default {
    name: 'Two',
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
        console.log("created Two")
    },
    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>

</style>