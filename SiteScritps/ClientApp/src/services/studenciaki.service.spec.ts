import { TestBed } from '@angular/core/testing';

import { StudenciakiService } from './studenciaki.service';

describe('StudenciakiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudenciakiService = TestBed.get(StudenciakiService);
    expect(service).toBeTruthy();
  });
});
