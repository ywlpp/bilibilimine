<template>
    <div class="flex">
        <div class="flexbox" v-for="item in flex" :key="item.index">
            <div class="nei">
                <img :src="item.furl">
                <div class="showd"></div>
            </div>
            <div class="text">{{item.msg}}</div>
        </div>
    </div>
</template>
<script>
export default {
        props:['flex'],
    data(){
        return{

        }
    }
}
</script>

<style lang="scss" scoped>
.flex{
    width: 98%;
    padding-left: 1%; 
    padding-right: 1%; 
    height: 8rem;
    margin-top: .3rem;
    .flexbox{
        overflow: hidden;
        width: 50%;
        height: 8rem;
        // background: yellow;
        float: left;
        margin-top: 1%;
        .nei{
            width: 96%;
            height: 5.7rem;
            // background: red;
            border-radius: 10px 10px 10px 10px;
            margin-top: .3rem;
            position: relative;
            margin-left: 2%;
            img{
                width: 100%;
                position: absolute;
                top: 0;
                height: 100%;
                border-radius: 10px 10px 10px 10px;
            }
            .showd{
                width: 100%;
                position: absolute;
                bottom: 0;
                height: 1rem;
                border-radius: 0px 0px 10px 10px;
                // background: red;
                background: 
                linear-gradient(180deg,rgba(33,33,33,0),rgba(33,33,33,.5));
            }
        }
        .text{
            width: 96%;
            padding:2% 2%;
            overflow: hidden;
            height: 2rem;
            font-size: .7rem;
        }
    }
}
</style>
