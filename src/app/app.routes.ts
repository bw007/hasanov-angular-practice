import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./lesson-1/button-inc-dec/button-inc-dec').then((m) => m.ButtonIncDec),
  },
  {
    path: 'mini-calculator',
    loadComponent: () => import('./lesson-1/mini-calculator/mini-calculator').then((m) => m.MiniCalculator),
  },
  {
    path: 'student-list',
    loadComponent: () => import('./lesson-2/student-list/student-list').then((m) => m.StudentList),
  },
  {
    path: 'todo-list',
    loadComponent: () => import('./lesson-2/todo-list/todo-list').then((m) => m.TodoList)
  },
  {
    path: '**',
    redirectTo: '',
  },
];
