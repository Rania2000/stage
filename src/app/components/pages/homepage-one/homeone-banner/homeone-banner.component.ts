import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homeone-banner',
    templateUrl: './homeone-banner.component.html',
    styleUrls: ['./homeone-banner.component.scss']
})
export class HomeoneBannerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    mainBannerContent: Content[] = [
        {
            title: 'Data Base Consulting Services',
            paragraphText: 'Obtenez des solutions professionnelles et fiables axées sur la recherche pour les besoins commerciaux de la science des données et du machine learning. Profitez de la prise de décision sans stress !',
            defaultBtnIcon: 'flaticon-structure',
            defaultBtnText: 'A propos de nous ',
            defaultBtnLink: 'à propos',
            videoBtnIcon: 'flaticon-google-play',
            videoBtnText: 'Watch Video',
            videoBtnLink: 'https://www.youtube.com/watch?v=Y5KCDWi7h9o'
        }
    ]

}
class Content {
    title : string;
    paragraphText : string;
    defaultBtnIcon : string;
    defaultBtnText: string;
    defaultBtnLink : string;
    videoBtnIcon : string;
    videoBtnText: string;
    videoBtnLink : string;
}