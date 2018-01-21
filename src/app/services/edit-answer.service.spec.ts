import { TestBed, inject } from '@angular/core/testing';

import { EditAnswerService } from './edit-answer.service';

describe('EditAnswerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditAnswerService]
    });
  });

  it('should ...', inject([EditAnswerService], (service: EditAnswerService) => {
    expect(service).toBeTruthy();
  }));
});
