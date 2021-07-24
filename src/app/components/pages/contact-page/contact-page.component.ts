import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contact-page',
    templateUrl: './contact-page.component.html',
    styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    pageTitleArea: pageTitle[] = [
        {
            title: 'Contact Us'
        }
    ]
    contactInfoBox1: InfoBox1[] = [
        {
            icon: 'bx bx-map',
            title: 'Notre Addresse',
            location: '4 RUE SIMONE DE BEAUVOIR à ALFORTVILLE (94140), FRANCE'
        }
    ]
    contactInfoBox2: InfoBox2[] = [
        {
            icon: 'bx bx-phone-call',
            title: 'Contact',
            number: '(+33)06 35 39 78 99',
            email: 'ilef.infoservice@gmail.com'
        }
    ]
    contactInfoBox3: InfoBox3[] = [
        {
            icon: 'bx bx-time-five',
            title: 'Horaire',
            text1: 'Monday - Friday: 09:00 - 20:00',
            text2: 'Sunday & Saturday: 10:30 - 22:00'
        }
    ]

    sectionTitle: sectionTitleContent[] = [
        {
            subTitle: "Entrer En Contact",
            title: ' Prêt à Commencer? ',
            paragraphText: 'Votre adresse email ne sera pas publiée. Les champs requis sont indiqués *'
        }
    ]
    contactImage: Image[] = [
        {
            img: 'https://images.unsplash.com/photo-1534445967719-8ae7b972b1a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
        }
    ]

}
class pageTitle {
    title : string;
}
class InfoBox1 {
    icon : string;
    title : string;
    location : string;
}
class InfoBox2 {
    icon : string;
    title : string;
    number : string;
    email : string;
}
class InfoBox3 {
    icon : string;
    title : string;
    text1 : string;
    text2 : string;
}

class sectionTitleContent {
    subTitle : string;
    title : string;
    paragraphText : string;
}
class Image {
    img : string;
}