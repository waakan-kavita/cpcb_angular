import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-commerce',
  templateUrl: './e-commerce.component.html',
  styleUrls: ['./e-commerce.component.scss']
})
export class ECommerceComponent implements OnInit {
  latitude:20.5937;
  longitude:78.9629;
  constructor() { }

  //////code start here for multiple select with checkbox////////////

   //privious working code for signle//
  // fruits = ['Apple', 'Banana', 'Orange', 'Grapes'];
 
  // selectedFruits: string[] = [];
  // isAllSelected: boolean = false;

  // toggleAllSelection() {
  //   this.isAllSelected = !this.isAllSelected;
  //   if (this.isAllSelected) {
  //     this.selectedFruits = [...this.fruits];
  //   } else {
  //     this.selectedFruits = [];
  //   }
  // }

  // toggleSelection(fruit: string) {
  //   if (this.selectedFruits.includes(fruit)) {
  //     this.selectedFruits = this.selectedFruits.filter(item => item !== fruit);
  //   } else {
  //     this.selectedFruits.push(fruit);
  //   }
  //   this.isAllSelected = this.selectedFruits.length === this.fruits.length;
  // }

  // selectAllValue = 'selectAll';

  // onDropdownOpened(opened: boolean) {
  //   if (opened) {
  //     this.isAllSelected = this.selectedFruits.length === this.fruits.length;
  //   }
  // }
  //privious working code for signle//



  selected = {};

  dropdowns = [
    { name: 'Fruits', data: ['Apple', 'Banana', 'Orange', 'Grapes'] },
    { name: 'Colors', data: ['Red', 'Green', 'Blue', 'Yellow'] },
    // Add more dropdown data as needed
  ];

  selectAll(dropdownName: string) {
    const dropdownData = this.dropdowns.find(dropdown => dropdown.name === dropdownName)?.data;
    if (dropdownData) {
      this.selected[dropdownName] = [...dropdownData];
    }
  }

  unselectAll(dropdownName: string) {
    this.selected[dropdownName] = [];
  }
  //////code start here for multiple select with checkbox end////////////


  ngOnInit(): void {
    $.getScript("./assets/js/e-commerce-dashboard.js");
    $.getScript('./assets/plugins/select2/select2.min.js');
    $.getScript('./assets/js/custom-select2.js');
  }

}
