import {
    Component,
    OnDestroy,
    OnInit,
} from '@angular/core';
import { ProductSlider } from '../../shared/data/slider';
import { Product } from '../../shared/classes/product';
import { ProductService } from '../../shared/services/product.service';

@Component({
    selector: 'app-food-supplements',
    templateUrl: './food-supplements.component.html',
    styleUrls: [ './food-supplements.component.scss' ],
})
export class FoodSupplementsComponent implements OnInit, OnDestroy {

    public themeLogo: string = 'assets/images/icon/logo-3.png';
    public themeFooterLogo: string = 'assets/images/icon/logo-9.png';

    public products: Product[] = [];
    public productCollections: any[] = [];

    public ProductSliderConfig: any = ProductSlider;
    public sliders = [
        {
            title: 'special offer',
            subTitle: 'Buy Food Supplements',
            image: 'assets/images/slider/28.jpg',
        }, {
            title: 'special offer',
            subTitle: 'On Food Supplements',
            image: 'assets/images/slider/29.jpg',
        },
    ];
    // Collection banner
    public collections = [
        {
            image: 'assets/images/collection/food-supplements/1.jpg',
            save: 'save 50%',
            title: 'oils',
            link: '/home/left-sidebar/collection/food-supplements',
            class: 'p-left',
        }, {
            image: 'assets/images/collection/food-supplements/2.jpg',
            save: 'save 20%',
            title: 'liquid',
            link: '/home/left-sidebar/collection/food-supplements',
            class: 'p-right',
        },
    ];
    // Blog
    public blogs = [
        {
            image: 'assets/images/blog/40.jpg',
            date: '25 January 2021',
            title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
            by: 'John Dio',
        }, {
            image: 'assets/images/blog/41.jpg',
            date: '26 January 2021',
            title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
            by: 'John Dio',
        }, {
            image: 'assets/images/blog/42.jpg',
            date: '27 January 2021',
            title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
            by: 'John Dio',
        }, {
            image: 'assets/images/blog/40.jpg',
            date: '28 January 2021',
            title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
            by: 'John Dio',
        },
    ];
    // Logo
    public logos = [
        {
            image: 'assets/images/logos/1.png',
        }, {
            image: 'assets/images/logos/2.png',
        }, {
            image: 'assets/images/logos/3.png',
        }, {
            image: 'assets/images/logos/4.png',
        }, {
            image: 'assets/images/logos/5.png',
        }, {
            image: 'assets/images/logos/6.png',
        }, {
            image: 'assets/images/logos/7.png',
        }, {
            image: 'assets/images/logos/8.png',
        },
    ];

    constructor(public productService: ProductService) {
        this.productService.getProducts.subscribe(response => {
            this.products = response.filter(item => item.type == 'food-supplements');
            // Get Product Collection
            this.products.filter((item) => {
                item.collection.filter((collection) => {
                    const index = this.productCollections.indexOf(collection);
                    if (index === -1) this.productCollections.push(collection);
                });
            });
        });
    }

    ngOnInit(): void {
        // Change color for this layout
        document.documentElement.style.setProperty('--theme-deafult', '#5D7227');
        document.documentElement.style.setProperty('--theme-gradient1', '#5D7227');
        document.documentElement.style.setProperty('--theme-gradient2', '#203F15');
    }

    ngOnDestroy(): void {
        // Remove Color
        document.documentElement.style.removeProperty('--theme-deafult');
        document.documentElement.style.removeProperty('--theme-gradient1');
        document.documentElement.style.removeProperty('--theme-gradient2');
    }

    // Product Tab collection
    getCollectionProducts(collection) {
        return this.products.filter((item) => {
            if (item.collection.find(i => i === collection)) {
                return item;
            }
        });
    }

}
