
import { formatDate } from '@angular/common';
import { AfterViewInit, Component, Injectable } from '@angular/core';
import { TurneroService } from 'src/app/shared';


@Component({
  selector: 'app-grafico',
  templateUrl: './admin-dashboard-tabla.component.html',
  styleUrls: ['admin-dashboard-tabla.component.sass']
})
@Injectable({
  providedIn: 'root',
})
export class GraficoComponent implements AfterViewInit {

  public dataTabla: [any] = [{}];

  public dataTurnos = [{
    label: (new Date(Date.now())).toLocaleDateString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' }),
    y: 0
  }];
  public dataUsuarios = [{
    label: (new Date(Date.now())).toLocaleDateString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' }),
    y: 0
  }];
  chartOptions: any;
  constructor(public dashboardService: TurneroService,) {
    this.getDataGrafico()


  }

  ngAfterViewInit() {


  }

  crearTabla() {
    for (let index = 0; index < this.dataTurnos.length; index++) {
      this.dataTabla.push({
        sector: "Carnicería",
        fecha: this.dataTurnos[index].label,
        usuarios: this.dataUsuarios[index].y,
        turnos: this.dataTurnos[index].y,
        porcentaje: (this.dataUsuarios[index].y == 0 || this.dataTurnos[index].y == 0) ? '0' : ((((this.dataUsuarios[index].y) * 100) / this.dataTurnos[index].y).toFixed(2)) + '%'
      })

    }
    this.dataTabla.shift();
    //console.log(this.dataTabla)
  }

  public getTabla() {
    this.crearTabla
    return this.dataTabla
  }

  //inicio grafico
  public initializeChart() {
    this.chartOptions = {
      animationEnabled: true,
      animationDuration: 2000,
      title: {
        text: "Estadísticas",
        fontFamily: "sans-serif",
        margin: 10
      },
      axisX: {
        title: "Últimos 7 días",

      },
      axisY: {
        title: "Cantidad",


      },
      toolTip: {
        shared: true,

      },
      legend: {
        cursor: "pointer",
        itemclick: function (e: any) {
          if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
          } else {
            e.dataSeries.visible = true;
          }
          e.chart.render();
        }
      },
      data: [{
        type: "splineArea",
        showInLegend: true,
        name: "Usuarios",
        dataPoints: this.dataUsuarios

      }, {
        type: "spline",
        showInLegend: true,
        name: "Turnos",
        dataPoints: this.dataTurnos
      }]
    };
  }
  dibujando() {
    setInterval(() => {
      this.initializeChart();
    }, 1000)

  }

  //fin grafico

  getDataGrafico() {
    let cantidadDiasReporte = 7
    this.dashboardService.getTurnos().subscribe((request) => { //<<<<<<<<<<<<<<<<<<turnos
    
      // Crear un objeto contador
      let contadorFechas: { [key: string]: number } = this.contadorFechas(request.data, 'fechaLlamado');
           // Convertir el objeto contador en un arreglo
      for (const fecha in contadorFechas) {
        this.dataTurnos.push({
          label: (new Date(fecha)).toLocaleDateString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' }),
          y: contadorFechas[fecha],
        })
      }
      this.dataTurnos.sort((a, b) => new Date(a.label).getTime() - new Date(b.label).getTime());
      this.dataTurnos = this.dataTurnos.slice(0, cantidadDiasReporte + 1)
      this.dataTurnos.shift()
      this.initializeChart();
    });
    this.dashboardService.getClientes().subscribe((request) => {//<<<<<<<<<<<<<<<<<<clientes
      // Crear un objeto contador
      let contadorFechas: { [key: string]: number } = this.contadorFechas(request.data, 'fechaAlta');
            // Convertir el objeto contador en un arreglo
      for (const fecha in contadorFechas) {
        this.dataUsuarios.push({
          label: (new Date(fecha)).toLocaleDateString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' }),
          y: contadorFechas[fecha],
        })
      }
      this.dataUsuarios.sort((a, b) => new Date(a.label).getTime() - new Date(b.label).getTime());
      this.dataUsuarios = this.dataUsuarios.slice(0, cantidadDiasReporte + 1)
      this.dataUsuarios.shift()
      this.initializeChart();
      this.crearTabla()

    });






}
 contadorFechas(data: any, key: any) {
  let contadorFechas: { [key: string]: number } = {};
      const cantidadDiasReporte = 6; // Define la cantidad de días para el reporte
    
      for (let index = cantidadDiasReporte; index >= 0; index--) {
        const fecha = new Date(); // fecha y hora actual
        fecha.setDate(fecha.getDate() - index);
        contadorFechas[fecha.toDateString()] = 0;
      }
    
      // Contar las fechas repetidas
      if (data) {
        for (let i = 0; i < data.length; i++) {
          // Crear una nueva fecha sin la hora
          let fechaSinHora = new Date(data[i][key]);
          fechaSinHora.setHours(0, 0, 0, 0);
    
          // Incrementar el contador correspondiente a la fecha sin hora
          if (fechaSinHora.toDateString() in contadorFechas) {
            contadorFechas[fechaSinHora.toDateString()]++;
          } else {
            contadorFechas[fechaSinHora.toDateString()] = 1;
          }
        }
      }
    
      return contadorFechas;
    }
    
}





