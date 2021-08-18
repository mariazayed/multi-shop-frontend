import {
    Component,
    HostListener,
    Input,
    OnInit,
} from '@angular/core';

@Component({
    selector: 'app-header-one',
    templateUrl: './header-one.component.html',
    styleUrls: [ './header-one.component.scss' ],
})
export class HeaderOneComponent implements OnInit {

    @Input() class: string;
    @Input() themeLogo: string = 'assets/images/icon/logo.png'; // Default Logo
    @Input() topbar: boolean = true; // Default True
    @Input() sticky: boolean = false; // Default false

    public stick: boolean = false;

    constructor() {
    }

    ngOnInit(): void {
    }

    // @HostListener Decorator
    @HostListener('window:scroll', [])
    onWindowScroll() {
        let offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        this.stick = offset >= 150 && window.innerWidth > 400;
    }

}
