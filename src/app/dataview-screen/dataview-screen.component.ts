import { Component, OnInit } from '@angular/core';
import { FieldData } from '../models/FieldData.model';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';
import { TokenResponse } from '../models/TokenResponse.model';

@Component({
  selector: 'app-dataview-screen',
  templateUrl: './dataview-screen.component.html',
  styleUrls: ['./dataview-screen.component.css'],
})
export class DataviewScreenComponent implements OnInit {
  fields: FieldData[] = [];
  cargando: boolean = true;
  constructor(
    private authService: AuthService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.authService.getToken().subscribe((resp: TokenResponse) => {
      const token = resp.access_token;
      this.dataService.getData(token).subscribe(
        (dataApi: FieldData[]) => {
          this.fields = dataApi;
          this.cargando = false;
        },
        (err) => {
          console.log(err);
          this.cargando = false;
        }
      );
    });
  }
}
