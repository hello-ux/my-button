<template>
        <div>
            <button 
                class="my-button"
                :class="'my-button-'+ size"
                @click="handleClick"
            >
                <slot></slot>
            </button>
        </div>
</template>
<script>
    export default {
    name: 'MyButton',
      props: {
           size: {
                    type: String,
                    default: 'big'
           }
      },
    methods: {
        handleClick() {
            this.$emit('click')
        }
    }
    }
</script> 
<style scoped>
        .my-button {
            display: inline-block;
            border-radius: 3px;
            text-align: center;
            background-color: #4E6EF2;
            font-size: 12px;
        }
        .my-button-big {
            padding: 15px 20px;
        }
        .my-button-small {
            padding: 10px 15px;
        
        }
        .my-button-xl-small {
          padding: 10px 10px;
        }
</style>

