import { Component } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  template: '<div class="lds-facebook"><div></div><div></div><div></div></div>',
  styleUrls: ['./loader-spinner.component.css']
})
export class LoadingSpinnerComponent {}