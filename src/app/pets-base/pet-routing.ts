import { Routes } from '@angular/router';

import {PetsBaseComponent} from "./pets-base.component";
import {PetDetailComponent} from "./pet-detail/pet-detail.component";
import {FoodComponent} from "./food/food.component";
import {MedicineComponent} from "./medicine/medicine.component";
import {FoodViewComponent} from "./food-view/food-view.component";
import {PetAddComponent} from "./pet-add/pet-add.component";
import {AuthGuard} from "../auth/utils/auth.guard";
import {PetsComponent} from "./pets/pets.component";


export const PetsRoutes: Routes = [
  {
    path: 'pets',
    component: PetsBaseComponent, canActivate: [AuthGuard],
    children: [
      { path: '', component: PetsComponent, canActivate: [AuthGuard] },
      { path: 'add', component: PetAddComponent, canActivate: [AuthGuard] },
      { path: 'food', component: FoodViewComponent },
      { path: ':id',
         component: PetDetailComponent, canActivate: [AuthGuard],
         children: [
           { path: 'food', component: FoodComponent, canActivate: [AuthGuard] },
           { path: 'medicine', component: MedicineComponent, canActivate: [AuthGuard] },
         ]}
    ]
  }
];
