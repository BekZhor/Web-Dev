import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Product} from '../../models/productkaspi';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent {
  products: Product[] = [
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h23/h4e/85447720075294.png?format=gallery-medium',
      name: 'Asics WOLAS38209FSS',
      description: 'Высокое качество ткани и пошива основные преимущества этих брендовых изделий. Экипировка бренда создана использованием инновационных технологий. Формы этой торговой марки отличаются легкостью, комфортом в носке, дают возможность переносить дополнительные нагрузки.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/komplekt-asics-wolas38209fss-belyi-sinii-52-117476922/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h23/h4e/85447720075294.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h23/h4e/85447720075294.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h23/h4e/85447720075294.png?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5c/hd1/86567906574366.png?format=gallery-medium',
      name: 'Налокотник SND-GO BFRX-ST1106',
      description: 'Спортивные нарукавники подарят вам максимальный комфорт во время занятий любым видом спорта. Есть отверстие для пальцев. Рукава спортивные для волейбола женские и мужские отличный выбор профессионалов! комплекте идут 2 рукава без застежки. Дышащая ткань из полиэстера и латекса защитой от УФ - излучений позволяет сделать спортивные тренировки на открытом воздухе безопасными и удобными.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/snd-go-bfrx-st1106-chernyi-universal-nyi-121585363/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hbe/he9/86567906639902.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h94/h13/86567906705438.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hbb/h3e/86567906770974.png?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h86/hef/63852919095326.jpg?format=gallery-medium',
      name: 'Мяч Mikasa V200W',
      description: 'Оригинал!!!. ОДОБРЕНО FIVB. диаметр мяча соответствуют требованиям Международной федерации волейбола FIVB.',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/mikasa-v200w-dlja-voleibola-5-d67-100134795/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h86/hef/63852919095326.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hbc/h9c/63852922175518.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hbc/h9c/63852922175518.jpg?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p79/pcc/17945928.jpg?format=gallery-medium',
      name: 'Mikasa подставка для бутылок 4760132532',
      description: 'Подставка для бутылок MIKASA выпалена из гипоаллергенного пластика и вмещает 6 бутылок по 750 мл.',
      rating: 0,
      link: 'https://kaspi.kz/shop/p/mikasa-podstavka-dlja-butylok-4760132532-sinii-1-sht-132809801/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/p5d/pcc/17945929.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p79/pcc/17945928.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p79/pcc/17945928.jpg?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pea/p66/13963614.jpeg?format=gallery-medium',
      name: 'Кроссовки Mizuno Wave Dimension',
      description: 'Wave Dimension - это новейшая техническая разработка Mizuномер Эта обувь предназначена для стабильности и комфорта. Он создан по образцу WAVE MOMENTUM, включая структуру пятки подошвы, которая обеспечивает плавные прыжковые движения, структуру ботинка для удобной посадки и поддерживающие боковые панели.',
      rating: 0,
      link: 'https://kaspi.kz/shop/p/krossovki-mizuno-wave-dimension-red-krasnyi-40-5-131653972/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/p80/p63/13963615.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pad/p5c/13963617.jpeg?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h86/hf0/86306875539486.jpg?format=gallery-medium',
      name: 'Носки, гольфы, гетры, спортивные носки 587252856',
      description: 'Носки футбольные Footballsocks Размер: 37-43 Вид спорта: Бег, баскетбол, футбол, волейбол, теннис, борьба, бокс,фитнес, хоккей,, туризм.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/noski-gol-fy-getry-sportivnye-noski-587252856-1-para-belyi-37-43-120519032/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h58/h64/86306875605022.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h2f/h8d/86306875670558.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h64/hae/86306875736094.jpg?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hd1/h13/87219284934686.jpg?format=gallery-medium',
      name: 'Сетка Для волейбола 257000_973291835',
      description: 'Сетка для волейбола спортивная - длиной 9,5 метров и высотой 1 метр. Ячейки 10х10 см плетение узловое. Стальной трос. Петли делаете на нужном расстоянии между стойками вашей игровой площадки',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/dlja-voleibola-257000-973291835-chernyi-123968566/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf2/h91/87219285065758.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he6/h41/87219285131294.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hd0/h4f/87219285262366.jpg?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h43/h3e/87133268541470.jpg?format=gallery-medium',
      name: 'Эспандер Кистевой Sport Fit',
      description: 'Фирменный Набор Эспандеров SportFit представляет собой комплект тренажеров, предназначенных для развития мышц рук, пальцев и запястий. Набор эспандеров включают разную жесткость (от мягкого до твердого), что позволяет постепенно постепенно увеличивать силу и выносливость. Эспандеры представлены в 5 разных видах для точечной прокачки каждой мышцы.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/kistevoi-sport-fit-5-sht-60-kg-108956742/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h4d/h28/87133268607006.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/haf/hf5/87133269000222.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h74/h53/87133268672542.jpg?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h68/h3d/69203311656990.jpg?format=gallery-medium',
      name: 'Бутылка для воды 2 литра 1007',
      description: 'Вы можете выбирать любой цвет бутылки! (голубой, зеленый, фиолетовый) только напишите пожалуйста какой вам цвет нужен.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/butylka-dlja-vody-2-litra-1007-2000-ml-goluboi-108970626/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h99/h5c/69203312181278.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h6f/hfb/69203312705566.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha6/h92/69203313229854.jpg?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pcf/p53/6608715.jpg?format=gallery-medium',
      name: 'Mizuno нейлон, полиэстер сумка',
      description: 'Спортивно-дорожная сумка Mizuno.тильная, удобная вместительная. Детям удобная. Ручка на плечо и двойные ручки.,специальное отверстие для обуви',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/sumka-mizuno-30295012-130746697-neilon-poliester-30-l-129509570/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/p07/p54/6608717.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p24/p54/6608718.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pc8/p56/6608721.jpg?format=gallery-medium'
      ]
    },
  ];

  shareOnWhatsApp(link: string) {
    window.open(`https://wa.me/?text=${encodeURIComponent(link)}`, '_blank');
  }

  shareOnTelegram(link: string) {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(link)}`, '_blank');
  }
}
