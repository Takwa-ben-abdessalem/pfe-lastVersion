import { AgmCoreModule } from '@agm/core';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Route, RouterModule } from '@angular/router';
import { FuseAlertModule } from '@fuse/components/alert';
import { SettingComponent } from 'app/layout/common/setting/settings.component';
import { UserComponent } from 'app/layout/common/user/user.component';
import { ExampleComponent } from 'app/modules/admin/project/project.component';
import { SharedModule } from 'app/shared/shared.module';
import { ProductsService } from 'app/__services/Event_services/products.service';
import { AuthenComponent } from './user/authen/authen.component';
import { DetailsComponent } from './events/details/details.component';
import { ListComponent } from './events/list/list.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import {MatTooltipModule} from '@angular/material/tooltip'; 
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { FormsWizardsComponent } from './events/add-event/wizards/wizards.component';
import { PaymentComponent } from './payment/payment.component';
import { CheckoutComponent } from './payment/checkout/checkout.component';
import { CancelComponent } from './payment/cancel/cancel.component';
import { SuccessComponent } from './payment/success/success.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from "@angular/material/card";
import { ChatsComponent } from './events/chats/chats.component';
import {MatTabsModule} from '@angular/material/tabs';
import { HomeComponent } from './home/home.component';
import { CartProfileComponent } from './user/cart-profile/cart-profile.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { PaymentFormComponent } from './events/payment-form/payment-form.component';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './user/settings/settings.component';
import { SettingsModule } from './user/settings/settings.module';
import { BrowserModule } from '@angular/platform-browser';
import { SignupComponent } from './user/signup/signup.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';



const exampleRoutes: Route[] = [
  
    {
        path     : '',
        component: ExampleComponent
    },
    {
        path     : 'list',
        component: ListComponent,
       
    },
    {
        path     : 'auth',
        component: AuthenComponent,
       
    },
    {
        path     : 'auth/signup',
        component: SignupComponent,
       
    },
    {
        path     : 'add',
        component: FormsWizardsComponent,
       
    },
   
    {
        path: 'setting',
        loadChildren: () => import('app/modules/admin/project/user/settings/settings.module').then(m => m.SettingsModule)
    },    

    {
        path     : 'chat',
        component: ChatsComponent,
        children : [
            {
                path         : ':id',
                component    : CartProfileComponent,
              
            }
        ] 
    },
    {
        path     : 'home',
        component: HomeComponent,
       
    },



      {
        path     : 'carduser/:id',
        component: CartProfileComponent,
       },
    {
        path     : ':id',
        component: DetailsComponent,
       
    },

    {
        path: 'payment/:id',
        component: PaymentFormComponent,
      },
   
];

@NgModule({
    declarations: [
        ListComponent,
        AuthenComponent,
        DetailsComponent,
        FormsWizardsComponent,
        PaymentComponent,
        ChatsComponent,
        HomeComponent,
        CartProfileComponent,
        PaymentFormComponent,
        SignupComponent,
        
        

        
    

    ],
    imports     : [
        RouterModule.forChild(exampleRoutes),
        CommonModule,
        MatGoogleMapsAutocompleteModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCaKbVhcX_22R_pRKDYuNA7vox-PtGaDkI', // TODO: Colocar nos env variables
            libraries: ['places']
          }),
        
          MatCheckboxModule,
          MatFormFieldModule,
          MatSnackBarModule,
          MatTooltipModule,
          MatRadioModule,
          MatTabsModule,
          MatCarouselModule.forRoot(),
          MatDatepickerModule, 
          MatNativeDateModule,
          MatInputModule,
          MatProgressSpinnerModule,
          FuseAlertModule,
          FormsModule,
          MatCardModule,
          SharedModule,
          MatStepperModule,
          MatButtonModule,
          MatIconModule,
          MatSelectModule,


          
          



          

    ]
})
export class ExampleModule
{
}
