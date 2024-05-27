import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Candidate } from '../../../modules/candidates/interfaces/Candidate.interface';
@Injectable({
  providedIn: 'root'
})
export class CandidatesService {

  constructor(private http: HttpClient) { }

  getCandidates(): Observable<Candidate[]>{
    return this.http.get<Candidate[]>('assets/list.json').pipe(
      map(resp => resp),
      catchError ( error => of([]) )
    )
  }

  getCandidatesInfo(id: string): Observable<Candidate[]>{
    return this.http.get<Candidate[]>('assets/list.json').pipe(
      map(resp => resp),
      catchError ( error => of([]) )
    )
  }

}
