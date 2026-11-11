import { Routes } from '@angular/router';
import { User } from './user/user';
import { DataBinding } from './data-binding/data-binding';
import { AttributeDirective } from './attribute-directive/attribute-directive';
import { DirectiveNgswitchVsSwitch } from './directive-ngswitch-vs-switch/directive-ngswitch-vs-switch';
import { PageNotFound } from './page-not-found/page-not-found';
import { BuiltInPipes } from './built-in-pipes/built-in-pipes';
import { TemplateDrivenForms } from './template-driven-forms/template-driven-forms';
import { ReactiveForms } from './reactive-forms/reactive-forms';

export const routes: Routes = [

  //default route
  // {
  //  path:"", component: User
  // },
  {
    path: '',
    redirectTo: 'user', pathMatch:'full'
  },
  {
    path: 'user',
    component: User,
  },
  {
    path: 'data-binding',
    component: DataBinding,
  },
  {
    path: 'structural-directive',
    component: DirectiveNgswitchVsSwitch,
  },
  {
    path: 'attribute-directive',
    component: AttributeDirective,
  },
  {
    path: 'built-in-pipes',
    component: BuiltInPipes
  },
  {

    path: 'TDF',
    component: TemplateDrivenForms
  },
  {
    path: 'react',
    component: ReactiveForms
  },
  //white card route
  {
    path:"**", component: PageNotFound
  }
];
