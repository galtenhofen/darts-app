import { OnInit, Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    public companyName = 'Altenhofen Enterprises';
    public applicationName = 'Darts App';
    public version: string;

    public ngOnInit(): void {
        // this.version = require('./../../../../../package.json').version;
    }
}
