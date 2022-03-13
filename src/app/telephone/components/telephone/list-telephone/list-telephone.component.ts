import { Component, OnInit } from '@angular/core';
import { TelephoneService } from 'src/app/telephone/services/telephone.service';
@Component({
  selector: 'app-list-telephone',
  templateUrl: './list-telephone.component.html',
  styleUrls: ['./list-telephone.component.css'],
})
export class ListaTelephoneComponent implements OnInit {
  loading: boolean = false;
  phones: any[] = [];
  constructor(private telephoneService: TelephoneService) {}

  ngOnInit(): void {
    this.listPhones();
  }

  listPhones() {
    this.loading = true;
    this.telephoneService.getAll().subscribe((res) => {
      this.phones = res;
      this.loading = false;
    });
  }
}
