import { Component, EventEmitter, Output } from '@angular/core';
import { CandidatesService } from '../../services/candidate.service';
import { Candidate } from '../../../../modules/candidates/interfaces/Candidate.interface';

@Component({
  selector: 'recruiter-candidate-list',
  templateUrl: './candidates-list.component.html',
  styles: [
  ]
})
export class CandidatesListComponent {
  constructor(private candidateService: CandidatesService){}
  public candidatesList: Candidate[] = {} as Candidate[];
  public statusText: string = '';
  @Output() selectedCandidate = new EventEmitter<Candidate>;

  ngOnInit(){
    this.candidateService.getCandidates()
    .subscribe({
      next:
        (resp) => {
        this.candidatesList = resp
      }
    })
  }

  onSelectCandidate(candidate: Candidate) {
    this.selectedCandidate.emit(candidate)
  }



}
