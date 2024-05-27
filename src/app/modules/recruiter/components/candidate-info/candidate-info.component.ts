import { Component, Input } from '@angular/core';
import { Candidate } from '../../../../modules/candidates/interfaces/Candidate.interface';

import { CandidatesService } from '../../services/candidate.service';

@Component({
  selector: 'recruiter-candidate-info',
  templateUrl: './candidate-info.component.html',
})
export class CandidateInfoComponent {

  constructor(private candidateService: CandidatesService){}

  @Input() candidate: Candidate = {} as Candidate;


}
