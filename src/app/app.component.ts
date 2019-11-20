import { Component, OnInit } from '@angular/core';
import { DynamicFormBuilder, DynamicFormGroup } from '@libertyware/ngx-form-builder';
import { materialDesignRenderOptions } from '@libertyware/ngx-form-material-design-widget';
import { Personal } from './app-form-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  fb = new DynamicFormBuilder();

  testForm: DynamicFormGroup<Personal>;
  widgetsDesign = materialDesignRenderOptions;

  ngOnInit() {
    this.testForm = this.fb.group(Personal);
  }

  onSubmit() {
    if (this.testForm.valid) {
      console.log(this.testForm.object);
    }
  }
}
