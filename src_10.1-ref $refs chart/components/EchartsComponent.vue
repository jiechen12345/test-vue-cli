<!-- EchartsComponent.vue -->
<template>
    <div class="base-chart-box"></div>
    <!-- <div ref="chart" class="base-chart-box"></div> -->
</template>

<script>
//npm install echarts 後 import
import * as echarts from 'echarts';
export default {
    mounted() {
        //對某個div做echarts初始化
        const myChart = echarts.init(document.querySelector('.base-chart-box'))
        // const myChart = echarts.init(this.$refs.chart)

        //chart設定
        const option = {
            legend: {
                top: 'bottom'
            },
            toolbox: {
                show: true,
                feature: {
                    mark: { show: true },
                    dataView: { show: true, readOnly: false },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            series: [
                {
                    name: 'Nightingale Chart',
                    type: 'pie',
                    radius: [50, 250],
                    center: ['50%', '50%'],
                    roseType: 'area',
                    itemStyle: {
                        borderRadius: 8
                    },
                    data: [
                        { value: 40, name: 'rose 1' },
                        { value: 38, name: 'rose 2' },
                        { value: 32, name: 'rose 3' },
                        { value: 30, name: 'rose 4' },
                        { value: 28, name: 'rose 5' },
                        { value: 26, name: 'rose 6' },
                        { value: 22, name: 'rose 7' },
                        { value: 18, name: 'rose 8' }
                    ]
                }
            ]
        };
        //渲染chart到該div
        myChart.setOption(option)



    }


}
</script>

<style scoped>
.base-chart-box {
    width: 700px;
    height: 700px;
}
</style>