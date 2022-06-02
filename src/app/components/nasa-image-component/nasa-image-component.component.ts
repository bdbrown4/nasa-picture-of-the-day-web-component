import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nasa-image-component',
  templateUrl: './nasa-image-component.component.html',
  styleUrls: ['./nasa-image-component.component.scss']
})
export class NasaImageComponentComponent implements OnInit {

  @Input() imageURI: string | null = null;
  constructor() { }

  ngOnInit(): void {
  }

}
