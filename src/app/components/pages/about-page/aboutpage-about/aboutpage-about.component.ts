import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-aboutpage-about',
    templateUrl: './aboutpage-about.component.html',
    styleUrls: ['./aboutpage-about.component.scss']
})
export class AboutpageAboutComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    aboutImage: Image[] = [
        {
            img: 'https://images.unsplash.com/photo-1548092372-0d1bd40894a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
        }
    ]
    aboutContent: Content[] = [
        {
            subTitle: 'A Propos',
            title: 'Expert au secteur de la Technologies et services de l’information',
            paragraphText1: 'C’est une société de services informatiques offrant des solutions uniques et exceptionnelles à ses clients',
            paragraphText2: ' fournir des services de conseil en systèmes et logiciels informatique .Ainsi que la conception, l’édition, le développement et l’exploitation des sites internet et des applications mobiles '
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
    aboutText: Text[] = [
        {
            title: 'Our History',
            paragraphText: "De vraies innovations et une expérience client positive sont au cœur d'une communication réussie.",
            featuresList1: 'Activate Listening',
            featuresList2: 'Brilliant minds',
            featuresList3: 'Better. Best. Wow!',
            featuresList4: 'Branding it better!',
            icon: 'flaticon-tick'
        },
        {
            title: 'Our Mission',
            paragraphText: 'Real innovations and a positive customer experience are the heart of successful communication.',
            featuresList1: 'Creating. Results.',
            featuresList2: 'Expect more',
            featuresList3: 'Good thinking',
            featuresList4: 'In real we trust',
            icon: 'flaticon-tick'
        },
        {
            title: 'Who we are',
            paragraphText: 'Real innovations and a positive customer experience are the heart of successful communication.',
            featuresList1: 'Stay real. Always.',
            featuresList2: 'We have you covered',
            featuresList3: 'We turn heads',
            featuresList4: 'Your brand, promoted',
            icon: 'flaticon-tick'
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
}
class List {
    icon : string;
    title : string;
    subTitle : string;
}
class Text {
    title : string;
    paragraphText : string;
    featuresList1 : string;
    featuresList2 : string;
    featuresList3 : string;
    featuresList4 : string;
    icon : string;
}