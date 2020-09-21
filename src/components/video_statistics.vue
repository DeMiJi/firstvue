<template>
    <div class="char1">
        <!-- 自定义一个div来装我们的图 -->
        <div id="main" style="width: 90%;height:800px;"></div>
    </div>
</template>
<script>
    var echarts = require('echarts');
    export default {
        data () {
            return {
                option: {
                    //标题
                    title: { text: '视频分类数据统计' },
                    //工具
                    toolbox: {
                        //是否显示
                        show: true,
                        feature: {
                            //折线图 与 柱状图 切换
                            magicType: {
                                type: ['line', 'bar']
                            },
                            //下载
                            saveAsImage: {}
                        }
                    },
                    //节点显示
                    legend: {
                        data: ['播放次数'],
                    },
                    //x轴数据
                    xAxis: {
                        data: ["旋涡鸣人", "宇智波佐助", "春野樱", "卡卡西", "依鲁卡", "大蛇丸", "自来也", "鹿丸", "雏田", "月光疾风"]
                    },
                    //y轴
                    yAxis: {},
                    //数据
                    series: [{
                        //初始类型
                        type: 'bar',
                        data: [500, 400, 300, 600, 100, 150, 500, 400, 300, 400]
                    }]
                }
            }
        },
        methods: {
            draw () {
                //通过echarts初始化我们的div
                let myChart = echarts.init(document.getElementById('main'));
                //为这个echarts的图添加属性
                myChart.setOption(this.option, true)
            }

        },
        watch: {
            //数据变化时自动重画，在控制台修改message,会自动重画
            message: function () {
                this.draw();
            }
        },
        mounted () {
            //页面加载的时候，调用画图方法，画图
            this.draw();
        }
    }
</script>
<style scoped>
    .char1 {
        height: 100%;
        width: 100%;
        text-align: center;
        line-height: 160px;
    }
</style>
