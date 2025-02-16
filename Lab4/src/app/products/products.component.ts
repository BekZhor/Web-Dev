import { Component } from '@angular/core';
import { product} from "../models";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [new product('https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=preview-large', 'Apple iPhone 16 128Gb черный', 'Phone 16 – новый дизайн, яркие цвета, мощный процессор и свежая iOS 18 с искусственным интеллектом.', 5),
    new product('https://resources.cdn-kaspi.kz/img/m/p/hbc/h31/87295483445278.png?format=preview-large','Apple iPhone 16 Pro 256Gb черный','iPhone 16 Pro – это уникальный смартфон от Apple. Он создан на основе инноваций, отличается безукоризненным дизайном и потрясающей производительностью.',5),
    new product('https://resources.cdn-kaspi.kz/img/m/p/h74/ha7/87295492882462.png?format=preview-large','Apple iPhone 16 Pro Max 256Gb серебристый','Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета.',4.5),
    new product('https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=preview-large','Xiaomi Redmi 13C 8 ГБ/256 ГБ черный','Общие\n' +
      '4G (LTE)Да\n' +
      'СтандартGSM 900/1800/1900, 3G, 4G LTE\n' +
      'Операционная системаAndroid 13 Tiramisu MIUI 14',4),
    new product('https://resources.cdn-kaspi.kz/img/m/p/h1b/hd6/64377056231454.jpg?format=preview-large','Apple 18W USB-C Power Adapter USB Type-C белый','Адаптер Apple 18W USB-C Power Adapter представляет собой компактное и эффективное зарядное устройство, предназначенное для быстрой и эффективной зарядки ваших устройств.',4.3),
    new product('https://resources.cdn-kaspi.kz/img/m/p/p55/p9b/5542335.png?format=preview-large','Apple Watch SE GPS Gen.2 2024 S/M 40 мм бежевый','Корпус в трёх стильных цветах. Мощные датчики для информации о вашем здоровье и активности. Инновационные функции безопасности. Удобные способы оставаться на связи.',4.9)];




  shareOnWhatsApp(index: number) {
    const currentUrl = window.location.href.split('#')[0]; // Убираем старые #id
    const containerId = `share-container-${index}`; // Генерируем уникальный id
    const fullUrl = `${currentUrl}#${containerId}`; // Добавляем #id к URL

    const whatsappLink = `https://wa.me/?text=${encodeURIComponent(fullUrl)}`;
    window.open(whatsappLink, '_blank');
  }

  shareOnTelegram(index: number) {
    const currentUrl = window.location.href.split('#')[0]; // Текущий URL без якоря
    const containerId = `share-container-${index}`; // Формируем якорь
    const fullUrl = `${currentUrl}#${containerId}`; // Полная ссылка

    const telegramLink = `https://t.me/share/url?url=${encodeURIComponent(fullUrl)}`;
    window.open(telegramLink, '_blank');
  }








}


