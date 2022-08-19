import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { Education } from 'src/app/models/model.education'

const httpOptions = {
    headers: new HttpHeaders ({
        'Content-type': 'application/json',
        'Access-control-Allow-Origin': '*'

    }),
};

@Injectable({
    providedIn: 'root',
})
export class EducationService { 
    baseUrl = '';


    constructor(private http: HttpClient) {}

    // configuracion del metodo get
    getEducation(): Observable<Education[]> {
        return this.http.get<Education[]>(this.baseUrl, { headers: httpOptions.headers})
    }
    
}