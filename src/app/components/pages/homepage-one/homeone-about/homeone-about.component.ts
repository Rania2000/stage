import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homeone-about',
    templateUrl: './homeone-about.component.html',
    styleUrls: ['./homeone-about.component.scss']
})
export class HomeoneAboutComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    aboutImage: Image[] = [
        {
            img: 'https://images.unsplash.com/photo-1596079890701-dd42edf0b7d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
        }
    ]
    aboutContent: Content[] = [
        {
            subTitle: 'About Us',
            title: 'Drive Digital Revolution Through Data Science',
            paragraphText1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            paragraphText2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            defaultBtnIcon: 'flaticon-right',
            defaultBtnText: 'Lire Plus',
            defaultBtnLink: 'about-us'
        }
    ]
    featuresList: List[] = [
        {
            icon: 'assets/img/icon1.png',
            title: 'EI',
            subTitle: 'Depuis 2020'
        },
        {
            icon: 'assets/img/icon2.png',
            title: '6',
            subTitle: 'memberes'
        },
        {
            icon: 'assets/img/icon3.png',
            title: '100%',
            subTitle: 'Satisfaction rate'
        },
        {
            icon: 'assets/img/icon4.png',
            title: '80%',
            subTitle: 'Senior scientist'
        }
    ]

}
class Image {
    img : string;
}
class Content {
    subTitle : string;
    title : string;
    paragraphText1 : string;
    paragraphText2 : string;
    defaultBtnIcon : string;
    defaultBtnText : string;
    defaultBtnLink : string;
}
class List {
    icon : string;
    title : string;
    subTitle : string;
}