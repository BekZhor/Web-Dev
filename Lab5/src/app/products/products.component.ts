import { Component } from '@angular/core';
import { product} from "../models";
import {filter} from "rxjs";


@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css'],
    standalone: false
})
export class ProductsComponent {
  Category = ''
  Choose(event: Event) {
    const target = event.target as HTMLElement;
    this.Category = target.innerText;
  }
  /*products = [new product('https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=preview-large', 'Apple iPhone 16 128Gb черный', 'Phone 16 – новый дизайн, яркие цвета, мощный процессор и свежая iOS 18 с искусственным интеллектом.', 5,'Phone'),
    new product('https://resources.cdn-kaspi.kz/img/m/p/hbc/h31/87295483445278.png?format=preview-large','Apple iPhone 16 Pro 256Gb черный','iPhone 16 Pro – это уникальный смартфон от Apple. Он создан на основе инноваций, отличается безукоризненным дизайном и потрясающей производительностью.',5,'Phone'),
    new product('https://resources.cdn-kaspi.kz/img/m/p/h74/ha7/87295492882462.png?format=preview-large','Apple iPhone 16 Pro Max 256Gb серебристый','Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета.',4.5,'Phone'),
    new product('https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=preview-large','Xiaomi Redmi 13C 8 ГБ/256 ГБ черный','Общие\n' +
      '4G (LTE)Да\n' +
      'СтандартGSM 900/1800/1900, 3G, 4G LTE\n' +
      'Операционная системаAndroid 13 Tiramisu MIUI 14',4,'Phone'),
    new product('https://resources.cdn-kaspi.kz/img/m/p/h1b/hd6/64377056231454.jpg?format=preview-large','Apple 18W USB-C Power Adapter USB Type-C белый','Адаптер Apple 18W USB-C Power Adapter представляет собой компактное и эффективное зарядное устройство, предназначенное для быстрой и эффективной зарядки ваших устройств.',4.3,'Charge'),
    new product('https://resources.cdn-kaspi.kz/img/m/p/p55/p9b/5542335.png?format=preview-large','Apple Watch SE GPS Gen.2 2024 S/M 40 мм бежевый','Корпус в трёх стильных цветах. Мощные датчики для информации о вашем здоровье и активности. Инновационные функции безопасности. Удобные способы оставаться на связи.',4.9,'Watch'),
    new product('','Laptop','Lenovo Laptop',4.6,'Laptop')];

  filteredProducts: product[] = [];




  shareOnWhatsApp(index: number) {
    const currentUrl = window.location.href.split('#')[0];
    const containerId = `share-container-${index}`;
    const fullUrl = `${currentUrl}#${containerId}`;

    const whatsappLink = `https://wa.me/?text=${encodeURIComponent(fullUrl)}`;
    window.open(whatsappLink, '_blank');
  }

  shareOnTelegram(index: number) {
    const currentUrl = window.location.href.split('#')[0];
    const containerId = `share-container-${index}`;
    const fullUrl = `${currentUrl}#${containerId}`;

    const telegramLink = `https://t.me/share/url?url=${encodeURIComponent(fullUrl)}`;
    window.open(telegramLink, '_blank');
  }


  Filter(category: string) {
    this.filteredProducts = this.products.filter(product => product.category === category)
  }*/








}


