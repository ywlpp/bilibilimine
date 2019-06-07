<template>
    <div class="Header">
        <div class="Header-logo">
            <img class='img' src="../assets/images/logo.jpg" alt="">
            <a href="#"><img class="icon" src="../assets/images/搜索.png" alt=""><span>千与千寻主题曲...</span></a>
            <div class="Header-touxiang"><img class="touxiang" src="../assets/images/修改个人头像.png" alt=""></div>
            <div class="Header-xiazai">下载App</div>
        </div>
        <div class="Header-scroll">
            <ul>
                <li v-for='item in headerdata' :key='item.index'><a href="#">{{item.title}}</a></li>
            </ul>
            <div class='jian' @click="xia">ｖ</div>
            <div class="postions" :style="dd" >
                <div class='jian' @click="xias">^</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['headerdata'],
    data(){
        return {
            dd:{},
            color:{},
        }
    },
    methods:{
        xia(){
            this.dd={
                top:0,
                // transitionProperty:'top',
                // transitionDuration:'1s'
                transition:"all .5s"
            }
        },
        xias(){
            this.dd={
                top:'-10rem',
                // transitionProperty:'top',
                // transitionDuration:'1s'
                transition:"all .5s"

            }
        }
    }
}
</script>

<style lang='scss' scoped>
    .Header{
        position: relative;
        height: 5rem;
       .Header-logo{
        height:2.6rem;
        position: fixed;
        z-index: 10;
        background: #fff;
        top: 0;
        width: 100%;
        .img{
            width:4rem;
            height:80%;
            float: left;
            margin-top: .3rem;
            margin-left: .7rem;
        }
        a{
            display: block;
            width: 7.5rem;
            height: 1.5rem;
            background:#f4f4f4;
            margin-top: .6rem;
            float: left;
            text-decoration: none;
            color: gray;
            margin-left: .6rem;
            border-radius: 10px 10px 10px 10px;
            line-height: 1.5rem;
            .icon{
                width: 1rem;
                height: 1rem;
                float: left;
                margin-top: .25rem;
                margin-left: .3rem;
            }
            span{
            font-size: .7rem;
            text-align: right;
            float: right;
            margin-right: .2rem;
            line-height: 1.68rem;
            text-align: center;
            }
        }
        .Header-touxiang{
            width: 1.5rem;       
            height: 1.4rem;     
            margin-left: .7rem;
            float: left;
            border-radius: 50%;
            margin-top: .7rem;
            background:#f4f4f4;
            .touxiang{
                width: 1.2rem;
                height: 1.2rem;
                margin-top: .15rem;
                margin-left: .1rem
            }
        }
        .Header-xiazai{
            width: 4rem;
            margin-left: .5rem;
            margin-top: .7rem;
            height: 1.4rem;
            float: left;
            font-size: .7rem;
            background: #fb7299;
            border-radius: 6px 6px 6px 6px;
            color: white;
            line-height: 1.4rem;
            text-align: center;
        }
       }
       .Header-scroll{
        width: 100%;
        height: 2.4rem;
        background: white;
        z-index: 3;
        margin-top: 2.6rem;
        position: fixed;
        top: 0;
        .jian{
            width: 10%;
            line-height: 2.4rem;
            text-align: center;
            float: right;
        }
            ul{
                float: left;
                width: 85%;
                overflow-x:scroll;
                margin-left: .7rem; 
                background: white;
                z-index:3;
                //处理ios overflow-x: scroll; 兼容的
                -webkit-overflow-scrolling: touch;
                white-space:nowrap;
                li{
                    display:inline-block;
                    width: 20%;
                    text-align: center;
                   line-height: 2.3rem;
                   a{
                    color: #757575;
                    height: 90%;
                    padding-bottom: .3rem;
                    font-family: '楷体';
                    font-size: .7rem;
                   }
                   a:hover{
                       color:#fb7299;
                       border-bottom: #fb7299 1px solid;
                   }
                }
            }
       }
    }
    .postions{
        width: 100%;
        height: 10rem;
        background: pink;
        position: absolute;
        z-index: 5;
        top:-20rem;
        // transitionProperty:'top',
        transition-property:top;
        transition-duration:0.5ms;
    }
</style>


