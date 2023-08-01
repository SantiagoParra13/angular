import {Component} from '@angular/core'


@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})

export class FooterComponent{
    
    anio:Number;
    name:String;

    constructor () {
         this.anio = new Date().getFullYear();
         this.name = "Santiago Vidal"

    }
    
}