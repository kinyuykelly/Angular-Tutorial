import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  imports: [CommonModule],
  selector: 'app-directive-ngfor-vs-for',
  styleUrl: './directive-ngfor-vs-for.scss',
  templateUrl: './directive-ngfor-vs-for.html',
})
export class DirectiveNgforVsFor {
  employees: any[] = [
    { empName: 'Kelly', empNo: 1, empEmail: 'k@gmail@gmail.com', empDept: 'IT' },
    { empName: 'Kyle', empNo: 2, empEmail: 'kyle@gmail@gmail.com', empDept: 'HR' },
    { empName: 'Pery', empNo: 3, empEmail: 'p@gmail@gmail.com', empDept: 'QA' }
  ];
  companyList: string[] =[
    
  ]
}
