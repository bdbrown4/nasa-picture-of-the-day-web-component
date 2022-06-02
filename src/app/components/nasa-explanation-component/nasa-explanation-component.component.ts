import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nasa-explanation-component',
  templateUrl: './nasa-explanation-component.component.html',
  styleUrls: ['./nasa-explanation-component.component.scss']
})
export class NasaExplanationComponentComponent implements OnInit {

  @Input() explanation: string | null = null;
  constructor() { }

  ngOnInit(): void {
  }

}
