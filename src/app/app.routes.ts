import { Routes } from '@angular/router';
import { Tasklist } from './tasklist/tasklist';
import { Taskadd } from './taskadd/taskadd';
import { Taskedit } from './taskedit/taskedit';

export const routes: Routes = [

{ path:'',redirectTo:'tasklist',pathMatch:'full' },

{ path:'tasklist',component:Tasklist },

{ path:'taskadd',component:Taskadd },

{ path:'taskedit/:id',component:Taskedit }

]