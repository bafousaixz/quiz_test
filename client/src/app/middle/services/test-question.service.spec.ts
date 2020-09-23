import { TestBed } from '@angular/core/testing';

import { TestQuestionService } from './test-question.service';

describe('TestQuestionService', () => {
  let service: TestQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
