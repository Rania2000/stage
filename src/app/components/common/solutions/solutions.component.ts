import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-solutions',
    templateUrl: './solutions.component.html',
    styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle: sectionTitleContent[] = [
        {
            subTitle: 'Nos Solutions',
            title: 'Nous sommes différents des autres, Pourquoi nous choisir...?',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
        }
    ]
    singleSolutionsBox: solutionsBoxContent[] = [
        {
            icon: 'flaticon-rocket',
            title: ' Innovative Applications',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipiscing aliqua.',
            link: 'services-details',
            linkText: 'View Details'
        },
        {
            icon: 'flaticon-laptop',
            title: 'SaaS Solutions',
            paragraphText: "Software as a Service , est un concept assez récent qui vous permet de s'abonner à un logiciel à distance au lieu de les acquérir et de devoir les installer sur votre propre matériel informatique.",
            link: 'services-details',
            linkText: 'View Details'
        },
        {
            icon: 'flaticon-money',
            title: 'E-Commerce Platforms',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipiscing aliqua.',
            link: 'services-details',
            linkText: 'View Details'
        }

    ]

}
class sectionTitleContent {
    subTitle : string;
    title : string;
    paragraphText : string;
}
class solutionsBoxContent {
    icon : string;
    title : string;
    paragraphText : string;
    link : string;
    linkText : string;
}