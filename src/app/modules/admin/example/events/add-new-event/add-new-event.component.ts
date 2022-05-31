import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-add-new-event',
  templateUrl: './add-new-event.component.html',
  styleUrls: ['./add-new-event.component.scss']
})
export class AddNewEventComponent implements OnInit {

  horizontalStepperForm: FormGroup;
  verticalStepperForm: FormGroup;

  /**
   * Constructor
   */
  constructor(private _formBuilder: FormBuilder)
  {
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void
  {
      // Horizontal stepper form
      this.horizontalStepperForm = this._formBuilder.group({
          step1: this._formBuilder.group({
              email   : ['', [Validators.required, Validators.email]],
              country : ['', Validators.required],
              language: ['', Validators.required]
          }),
          step2: this._formBuilder.group({
              firstName: ['', Validators.required],
              lastName : ['', Validators.required],
              userName : ['', Validators.required],
              about    : ['']
          }),
          step3: this._formBuilder.group({
              byEmail          : this._formBuilder.group({
                  companyNews     : [true],
                  featuredProducts: [false],
                  messages        : [true]
              }),
              pushNotifications: ['everything', Validators.required]
          })
      });

      // Vertical stepper form
      this.verticalStepperForm = this._formBuilder.group({
          step1: this._formBuilder.group({
              email   : ['', [Validators.required, Validators.email]],
              country : ['', Validators.required],
              language: ['', Validators.required]
          }),
          step2: this._formBuilder.group({
              firstName: ['', Validators.required],
              lastName : ['', Validators.required],
              userName : ['', Validators.required],
              about    : ['']
          }),
          step3: this._formBuilder.group({
              byEmail          : this._formBuilder.group({
                  companyNews     : [true],
                  featuredProducts: [false],
                  messages        : [true]
              }),
              pushNotifications: ['everything', Validators.required]
          })
      });
  }
}
