<template>
<div id='toast-container'>
    <transition-group name="toast-trans">
        <div v-for='item in queue' v-bind:key='item.id' class='toast'>
            {{ item.message }}
        </div>
    </transition-group>
</div>
</template>

<script>
export default {
    name: 'toast',
    data(){
        return{
            queue: [],
            queue_length: 0
        }
    },
    watch:{
        queue: function (queue){
            if(this.queue_length < this.queue.length){
                this.queue_length = this.queue.length;
                setTimeout(() => {
                    this.queue.shift();
                    this.queue_length = this.queue.length;
                }, 3000);
            }
        }
    },
    mounted(){
        console.log('mounted')
    }
}
</script>

<style lang='scss' scoped>
.toast-trans-enter-active, .toast-trans-leave-active{
    transition: all .5s;
}
.toast-trans-enter, .toast-trans-leave-to{
    opacity: 0;
    transform: translateX(30px);
}

.toast{
    background: white;
    color: $secondary;
    border: 1px solid $secondary;
    border-radius: 1px;
    padding: 10px;
    margin: 10px;
    width: 100px;
}

#toast-container{
    position:fixed;
    right: 50px;
    top:50px;

}
</style>