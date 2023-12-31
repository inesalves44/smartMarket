import { Component, OnInit } from '@angular/core';
import { MarcaService } from '../marca.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-marca',
  templateUrl: './create-marca.component.html',
  styleUrls: ['./create-marca.component.css'],
})

export class CreateMarcaComponent implements OnInit {
  descricao = '';

  constructor(private service: MarcaService) {}

  ngOnInit(): void {}

  createNewMarcaId(desc: string) {
    let marca = {
      descricao: desc,
    };

    if (marca.descricao == "") {
      return window.alert('Please insert the brand name.');
     }

    this.service.createMarca(marca).subscribe((data) => console.log(data));

    window.location.reload();
    window.alert('Brand inserted successfully.')
  }

  createNewMarca(form: NgForm) {
    let marca = {
      descricao: form.value.marcaName,
    };

    if (marca.descricao == "") {
      return window.alert('Please insert the brand name.');
     }

    this.service.createMarca(marca).subscribe((data) => console.log(data));
    window.location.reload();
    window.alert('Brand inserted successfully.')
  }
}
