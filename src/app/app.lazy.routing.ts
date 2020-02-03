import { RouterModule,PreloadAllModules,NoPreloading,Routes} from '@angular/router';
import { ModuleWithProviders, Component } from "@angular/core";

import { LoginComponent} from './login/login.component' ;
import { SignupComponent} from './signup/signup.component' ;
import { StudentComponent} from './student/student.component' ;
import { EditComponent } from './student/edit/edit.component';



const APP_LAZY_ROUTES : Routes = [
    {
        path : 'login' , component : LoginComponent
    },
    {
        path : 'signup' , component : SignupComponent
    },
    {
        path : 'student' , component : StudentComponent
    },
    {
        path : 'edit/:id' , component : EditComponent
    }
    
];

export const APP_LAZY_ROUTING : ModuleWithProviders = RouterModule.forRoot(APP_LAZY_ROUTES, {preloadingStrategy:NoPreloading});


