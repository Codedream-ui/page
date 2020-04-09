<template>
    <section class="mod-03 mb45">
        <div class="container fix">
            <div class="name fl">
                {{label}}
            </div>
            <div class="address fr">
                <span class="on">{{on}}</span>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Banner',
    props: {
        label: null,
        on: null,
    },
    data () {
        return {
        
        }
    }
}
</script>

<style scoped>
.mod-03{
    width: 100%;
    min-width: 1200px;
    height: 75px;
    line-height: 75px;
    background: #ebebeb;
}
.mod-03 .name{
    font-size: 18px;
    color: #656565;
}
.address{
    font-size: 14px;
    color: #4c4c4c;
}
.address a{
    color: #4c4c4c;
    transition: all 0.5s;
}
.address a:hover,
.address .on{
    color: #014c85;
}
</style>
