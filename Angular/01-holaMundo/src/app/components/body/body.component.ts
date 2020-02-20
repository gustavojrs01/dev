import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {
    constructor(private http:HttpClient){}
    mostrar=true;

    ngOnInit(){
        console.log("INIT2");
        this.http.get('https://plataforma.zn.ela.cl./a.php').subscribe((response)=>{
            console.log(response);
        });
    }

    frase:any = {
        mensaje:'Un gran poder requiere una gran responsabilidad',
        autor:'Ben Parker'
    };

    personajes:String[] = ['Spiderman', 'Hulk', 'Wolverine'];
}
