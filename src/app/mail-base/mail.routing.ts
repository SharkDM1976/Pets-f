import { Routes } from '@angular/router';

import {MailBaseComponent} from "./mail-base.component";
import {ServerComponent} from "./server/server.component";
import {AddresBookComponent} from "./addres-book/addres-book.component";
import {SendComponent} from "./send/send.component";
import {ServerEditComponent} from "./server/server-edit/server-edit.component";



export const MailRoutes: Routes = [
  {
    path: 'mail',
    component: MailBaseComponent,
    children: [
      { path: 'address-book', component: AddresBookComponent },
      { path: 'server', component: ServerComponent,
        children: [
          { path: ':id', component: ServerEditComponent }
        ]},
      { path: 'send', component: SendComponent }
    ]
  }
];
