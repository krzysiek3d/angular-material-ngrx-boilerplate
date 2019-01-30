import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-feature',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
