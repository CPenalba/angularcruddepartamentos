import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceDepatamentos } from '../../services/service.departamentos';
import { Router } from '@angular/router';
import { Departamento } from '../../models/departamento';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  @ViewChild('cajaid') cajaId!: ElementRef;
  @ViewChild('cajanombre') cajaNombre!: ElementRef;
  @ViewChild('cajalocalidad') cajaLocalidad!: ElementRef;

  constructor(private _service: ServiceDepatamentos, private _router: Router) {}

  insertDepartamento(): void {
    let id = parseInt(this.cajaId.nativeElement.value);
    let nom = this.cajaNombre.nativeElement.value;
    let loc = this.cajaLocalidad.nativeElement.value;

    let newDepartamento = new Departamento(id, nom, loc);
    this._service.insertDepartamento(newDepartamento).subscribe((response) => {
      this._router.navigate(['/']);
    });
  }
}
