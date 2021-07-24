import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-services-page',
    templateUrl: './services-page.component.html',
    styleUrls: ['./services-page.component.scss']
})
export class ServicesPageComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    pageTitleArea: pageTitle[] = [
        {
            title: 'Services'
        }
    ]
    singleSolutionsBox: solutionsBoxContent[] = [
        {
            icon: 'flaticon-rocket',
            title: 'Pilotage',
            paragraphText: ' Coaching agile et gouvernance, product management',
            link: 'services-details',
            linkText: 'View Details'
        },
        {
            icon: 'flaticon-laptop',
            title: 'User centric focus ',
            paragraphText: ' UX/UI, CI/CD, Framework Agile ',
            link: 'services-details',
            linkText: 'View Details'
        },
        {
            icon: 'flaticon-money',
            title: 'DATA processing ',
            paragraphText: ' DATA Management, DATA Engineering, DATA analytics,Data visualisation',
            link: 'services-details',
            linkText: 'View Details'
        },
        {
            icon: 'flaticon-segmentation',
            title: 'Engineering ',
            paragraphText: 'Software development, Web and mobile development,API management',
            link: 'services-details',
            linkText: 'View Details'
        },
   
        {
            icon: 'flaticon-settings',
            title: 'Cloud solution',
            paragraphText: ' (AWS, AZURE, GOOGLE Cloud…)   ',
            link: 'services-details',
            linkText: 'View Details'
        },
        {
            icon: 'flaticon-analytics',
            title: 'Scientific Research ',
            paragraphText: 'Virtual reality, augmented reality, internet of things  ',
            link: 'services-details',
            linkText: 'View Details'
        },
        {
            icon: 'flaticon-settings',
            title: ' Digital Marketing ',
            paragraphText: ' community management, branding, SEO, SEA',
            link: 'services-details',
            linkText: 'View Details'
        },
        {
            icon: 'flaticon-settings',
            title: 'Talent Management',
            paragraphText: ' Outsourcing, Talent empowerment ',
            link: 'services-details',
            linkText: 'View Details'
        }
    ]

}
class pageTitle {
    title : string;
}
class solutionsBoxContent {
    icon : string;
    title : string;
    paragraphText : string;
    link : string;
    linkText : string;
}