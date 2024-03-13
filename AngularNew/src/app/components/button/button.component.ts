import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  value: number=0;

  increase(): void {
    this.value++;
  }

  decrease(): void {
      this.value--;
  }
}
