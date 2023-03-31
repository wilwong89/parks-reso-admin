import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-passes-filter-fields',
  templateUrl: './passes-filter-fields.component.html',
  styleUrls: ['./passes-filter-fields.component.scss'],
})
export class PassesFilterFieldsComponent implements OnChanges {
  @Input() type = new UntypedFormControl();
  @Input() typeOptions;
  @Input() date = new UntypedFormControl();
  @Input() passStatus = new UntypedFormControl();
  @Input() passStatusOptions;
  @Input() firstName = new UntypedFormControl();
  @Input() lastName = new UntypedFormControl();
  @Input() email = new UntypedFormControl();
  @Input() registrationNumber = new UntypedFormControl();
  @Input() isOverbooked = new UntypedFormControl();
  @Input() overbookedOptions;

  constructor() {}

  ngOnChanges(): void {}
}
