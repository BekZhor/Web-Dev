import {Component, EventEmitter, Input, Output} from '@angular/core';
import {product} from "../models";

@Component({
    selector: 'app-productitem',
    templateUrl: './productitem.component.html',
    styleUrl: './productitem.component.css',
    standalone: false
})
export class ProductitemComponent {

  like = 0;

  Like() {
    this.like++;
  }
  @Output() remove= new EventEmitter();
  Remove(){
    this.remove.emit();
  }


}
