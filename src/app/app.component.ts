import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { IUserNameInterface } from './models/user-name';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'config esLint';
  namesList!: IUserNameInterface[];
  isVisible$ = of(false);
  protected _dogName = 'Pipa';
  private _catName = 'Murka';
  public constructor() {}

  getUser() {
    var b: string;
    var v = 'test';
    let obj = { a: 1, c: 3, b: 2 };
    const anotherValue = 27;
    const x: string[] = ['a', 'b'];
    b = typeof anotherValue === 'number' ? 'yes' : 'no';
  }

  ngOnInit(): void {
    console.warn(1);
  }
}
