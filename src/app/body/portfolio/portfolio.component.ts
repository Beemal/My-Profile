import { Component, OnInit } from '@angular/core';
// import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
// import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
// import { ModalComponent } from "ModalComponent";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.less']
})
export class PortfolioComponent implements OnInit {
// modalRef: MdbModalRef<ModalComponent>;
  constructor() { }

  // openModal() {
  //   this.modalRef = this.modalService.open(ModalComponent)
  // }

  // openModal() {
  //   const dialogConfig = new MatDialogConfig();
  //   // The user can't close the dialog by clicking outside its body
  //   dialogConfig.disableClose = true;
  //   dialogConfig.id = "modal-component";
  //   dialogConfig.height = "350px";
  //   dialogConfig.width = "600px";
  //   // https://material.angular.io/components/dialog/overview
  //   const modalDialog = this.matDialog.open(ModalComponent, dialogConfig);
  // }

  ngOnInit(): void {
  }

}
