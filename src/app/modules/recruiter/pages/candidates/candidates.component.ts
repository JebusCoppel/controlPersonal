import { Component } from '@angular/core';
import { Candidate } from '../../../../modules/candidates/interfaces/Candidate.interface';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styles: [
  ]
})
export class CandidatesComponent {

  public selectedCandidate: Candidate = {} as Candidate;
  public toggleInfo: boolean = false;

  onCandidateSelected(candidate: Candidate) {
    this.selectedCandidate = candidate
    this.selectedCandidate ? this.toggleInfo = true : '';

  }

}
