import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-echarts-bar-trouble',
  templateUrl: './echarts-bar-trouble.component.html',
  styleUrls: ['./echarts-bar-trouble.component.scss']
})
export class EchartsBarTroubleComponent implements OnInit {

  public option: any;
  public data = [
    {name: '1月', value: 80},
    {name: '2月', value: 87.8},
    {name: '3月', value: 71},
    {name: '4月', value: 80},
    {name: '5月', value: 66},
    {name: '6月', value: 80},
    {name: '7月', value: 80},
    {name: '8月', value: 80}
    ];
  public min = 50;
  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line:one-variable-per-declaration
    const xData = [], yData = [];
    this.data.map((a, b) => {
      xData.push(a.name);
      if (a.value === 0) {
        yData.push(a.value + this.min);
      } else {
        yData.push(a.value);
      }
    });
    this.option = {
      title: {
        text: '月隐患数统计'
      },
      backgroundColor: '#fff',
      color: ['#3398DB'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'line',
          lineStyle: {
            opacity: 0
          }
        },
        formatter: (prams) => {
          if (prams[0].data === this.min) {
            return '隐患数：0';
          } else {
            return '隐患数：' + prams[0].data;
          }
        }
      },
      legend: {
        data: ['直接访问', '背景'],
        show: false
      },
      grid: {
        left: '0%',
        right: '0%',
        bottom: '5%',
        top: '7%',
        height: '85%',
        containLabel: true,
        z: 22
      },
      xAxis: [{
        type: 'category',
        gridIndex: 0,
        data: xData,
        axisTick: {
          show: false,
          alignWithLabel: true
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: '#0c3b71'
          }
        },
        axisLabel: {
          color: 'rgb(170,170,170)',
          fontSize: 16
        }
      }],
      yAxis: [{
        type: 'value',
        gridIndex: 0,
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        min: this.min,
        max: 100,
        axisLine: {
          show: false,
          lineStyle: {
            color: '#0c3b71'
          }
        },
        axisLabel: {
          show: false,
          color: 'rgb(170,170,170)',
          formatter: '{value} %'
        }
      },
        {
          type: 'value',
          gridIndex: 0,
          min: this.min,
          max: 100,
          splitNumber: 10,
          splitLine: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          splitArea: {
            show: true,
            areaStyle: {
              color: ['rgba(250,250,250,0.0)', 'rgba(250,250,250,0.05)']
            }
          }
        }
      ],
      series: [{
        name: '合格率',
        type: 'bar',
        barWidth: '20%',
        xAxisIndex: 0,
        yAxisIndex: 0,
        itemStyle: {
          normal: {
            barBorderRadius: 20,
            color: '#9DC3FF'
          }
        },
        data: yData,
        zlevel: 11

      },

      ]
    };
  }

}
