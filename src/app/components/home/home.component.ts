import { Component, OnInit } from '@angular/core';
import { ServiceDepatamentos } from '../../services/service.departamentos';
import { Departamento } from '../../models/departamento';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  public departamentos!: Array<Departamento>;

  constructor(private _service: ServiceDepatamentos) {}

  loadDepartamentos(): void {
    this._service.getDepartamentos().subscribe((response) => {
      this.departamentos = response;
    });
  }

  deleteDepartamento(id: number): void {
    this._service.deleteDepartamento(id.toString()).subscribe((response) => {
      this.loadDepartamentos();
    });
  }

  ngOnInit(): void {
    this.loadDepartamentos();
  }
}
