import { Component,Input,OnInit } from '@angular/core';
import * as Highcharts from'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent {
    @Input() data = {};
    chartOptions={};
    Highcharts=Highcharts;
    constructor(){};
    ngOnInit(){
     this.chartOptions={
            chart: {
          type: 'area'
        },
        accessibility: {
            description: 'Image description: TEMPERATURE'
        },
        title: {
            text: 'Temperature Measurement'
        },
        
        tooltip: {
            pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
        },
        exporting:{
            enabled: true,
        },
        credits:{
            enabled: false,
        },
        series: [{
            data:this.data
        }]
    };

    HC_exporting(Highcharts);
    //to make the chart responsive
    setTimeout( () => {
        window.dispatchEvent(
            new Event('resize')
        );
    });
  }
}