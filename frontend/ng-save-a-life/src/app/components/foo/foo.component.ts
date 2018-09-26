import { Component, OnInit } from '@angular/core';
import {AuthService, Foo} from "../../services/auth.service";

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit {

  public foo = new Foo(1, 'sample foo');
  private foosUrl = 'http://localhost:8082/spring-security-oauth-resource/foos/';

  constructor(private _service: AuthService) { }

  ngOnInit() {
  }

  getFoo() {
    this._service.getResource(this.foosUrl + this.foo.id)
      .subscribe(
        data => this.foo = data,
        error => this.foo.name = 'Error');
  }

  addFoo() {

  }
}
