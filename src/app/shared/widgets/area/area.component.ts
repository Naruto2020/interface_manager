import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import exporting from 'highcharts/modules/exporting.src';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  chartOptions={};
  Highcharts = Highcharts;
  @Input() data:any= [];

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
          type: 'column'
      },
      title: {
          text: 'Monthly Average users activity'

      },
      subtitle: {
          //text: 'test',
          //enable:false
      },
      xAxis: {
          categories: [
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec'
          ],
          crosshair: true
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Users'
          }
      },
      tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y:.1f} users</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
      },
      /*plotOptions: {
          column: {
              pointPadding: 0.2,
              borderWidth: 0
          }
      },*/
      exporting : {
        enabled: true
      },
      credits:{
        enabled: false
      },
      series: this.data
    };

    HC_exporting(Highcharts);
    setTimeout(()=>{
      window.dispatchEvent(
        new Event("resize")
      )
    }, 200);

  }

}
