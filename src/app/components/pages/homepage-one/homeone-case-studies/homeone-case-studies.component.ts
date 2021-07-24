import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homeone-case-studies',
    templateUrl: './homeone-case-studies.component.html',
    styleUrls: ['./homeone-case-studies.component.scss']
})
export class HomeoneCaseStudiesComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    singleCaseStudyItem: singleCaseStudyItemContent[] = [
        {
            subTitle: 'Case study #1',
            title: 'Data Science in Pharmaceutical Industries',
            paragraphText1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            paragraphText2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
            link: 'case-studies-details',
            linkText: 'Details More',
            linkIcon: 'flaticon-view',
            img: 'https://images.unsplash.com/photo-1495055154266-57bbdeada43e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
        },
        {
            subTitle: 'Case study #2',
            title: 'Mathematics, Advanced Statistics in Python',
            paragraphText1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
            paragraphText2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
            link: 'case-studies-details',
            linkText: 'Details More',
            linkIcon: 'flaticon-view',
            img: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80'
        }
    ]

}
class singleCaseStudyItemContent {
    subTitle : string;
    title : string;
    paragraphText1 : string;
    paragraphText2 : string;
    link : string;
    linkText : string;
    linkIcon : string;
    img : string;
}