<template>
<div class="top">
<span>视频统计数据报表</span>
</div>
    <div class="ct">
        <div ref="video_type" class="video_t"></div>
        <div ref="video_type" class="video_t"></div>
    </div>
    <div class="bt"></div>
</template>

<script>
    import echarts from 'echarts'

    export default {
        name: "MyCharts",
        methods:{
            MyCharts() {
                const myChart = echarts.init(this.$refs.video_type);
                this.$http.get('http://localhost:9000/queryVideoType')
                    .then(res => {
                        setTimeout(() => {
                            myChart.hideLoading();
                            myChart.setOption({
                                color: ['#37A2DA', '#32C5E9', '#67E0E3', '#9FE6B8',
                                    '#FFDB5C','#ff9f7f', '#fb7293', '#E062AE', '#E690D1',
                                    '#e7bcf3', '#9d96f5', '#8378EA', '#96BFFF'],
                                title: {
                                    text: 'B站视频类型播放统计',
                                    left: 'center'
                                },
                                tooltip: {
                                    trigger: 'item',
                                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                                },
                                legend: {
                                    orient: 'vertical',
                                    left: 'left',
                                },
                                series: [
                                    {
                                        name: '播放类型',
                                        type: 'pie',
                                        radius: '55%',
                                        center: ['50%', '60%'],
                                        data: res.data,
                                        emphasis: {
                                            itemStyle: {
                                                shadowBlur: 10,
                                                shadowOffsetX: 0,
                                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                                            }
                                        }
                                    }
                                ]
                            });
                        }, 500); //加载动画时长为0.5秒
                    })
            }
        },
        mounted() {
            this.MyCharts();

        }
    }
</script>

<style scoped>
.video_t{
    width: 500px;
    height:400px;
    background-color: #00eeee;
}
</style>