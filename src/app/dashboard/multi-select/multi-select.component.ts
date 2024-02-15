import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder,FormGroup,FormControl } from '@angular/forms';
import {  EventEmitter, Input,  Output } from '@angular/core';

// interface Item {
//   id: number;
//   name: string;
// }


@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent implements OnInit {


  /////code start here with multicheckbox with mat-select///////
    // selected: { [key: string]: any[] } = {}; // Initialize selected to hold selected items
    // expandedDropdowns: { [key: string]: boolean } = {};
    // selectedCount: any[] = [];

    
    // dropdowns = [
    //   { name: 'State', data: ['ASSAM', 'NORTH CHENNAI', 'Arunachal Pradesh', 'Bihar','Chhattisgarh', 'Himachal Pradesh', 'Jharkhand', 'Maharashtra'] },
    //   { name: 'City', data: ['LUDHIANA', 'MADHURANTHAKKAM', 'MADURAI', 'BALIDIH BOKARO','BARAN', 'BANGLORE', 'BIJAPUR', 'BIKANER'] },
    //   { name: 'Category', data: ['Apple', 'Banana', 'Orange', 'Grapes','Apple', 'Banana', 'Orange', 'Grapes'] },
    //   { name: 'Industry', data: ['Red', 'Green', 'Blue', 'Yellow','Red', 'Green', 'Blue', 'Yellow'] },
    //   { name: 'Station', data: ['Apple', 'Banana', 'Orange', 'Grapes','Apple', 'Banana', 'Orange', 'Grapes'] },
    //   // Add more dropdown data as needed
    // ];

    // displayCount(selectedItems: any[] | null): string {
    //   return selectedItems ? `${selectedItems.length} selected` : ''; // Display count of selected items
    // }
    
    // selectAll(dropdownName: string) {
    //   const dropdownData = this.dropdowns.find(dropdown => dropdown.name === dropdownName)?.data;
    //   if (dropdownData) {
    //     this.selected[dropdownName] = [...dropdownData];
    //     this.updateDropdownState(dropdownName, false);
    //   }
    // }

    // unselectAll(dropdownName: string) {
    //   this.selected[dropdownName] = [];
    //   this.updateDropdownState(dropdownName, false);
    // }

    // isDropdownExpanded(dropdownName: string): boolean {
    //   return this.expandedDropdowns[dropdownName] || false;
    // }

    // toggleDropdown(dropdownName: string) {
    //   this.expandedDropdowns[dropdownName] = !this.expandedDropdowns[dropdownName];
    // }

    // private updateDropdownState(dropdownName: string, state: boolean) {
    //   this.expandedDropdowns[dropdownName] = state;
    // }  

  /////code start here with multicheckbox with mat-select end///////

 


  // states: Item[] = [
  //   { id: 1, name: 'State 1' },
  //   { id: 2, name: 'State 2' },
  //   { id: 3, name: 'State 3' }
  // ];
  // filteredStates: Item[] = [];
  // selectedStates: Item[] = [];
  // stateFilter: string = ''; 
  // isPanelOpen: boolean = false;
  // selectedStatesControl = new FormControl(); 

  // constructor() {}

  // togglePanel() {
  //   this.isPanelOpen = !this.isPanelOpen;
  // }

  // ngOnInit() {
  //   // You can perform any initialization tasks here
  // }
  // checkAll() {
  //   this.selectedStates = [...this.states];
  // }

  // uncheckAll() {
  //   this.selectedStates = [];
  // }

  
  // applyFilter() {
  //   this.filteredStates = this.states.filter(state =>
  //     state.name.toLowerCase().includes(this.stateFilter.toLowerCase())
  //   );
  // }

  // isSelected(state: Item): boolean {
  //   return this.selectedStates.some(s => s.id === state.id);
  // }

  // toggleSelection(state: Item) {
  //   if (this.isSelected(state)) {
  //     this.selectedStates = this.selectedStates.filter(s => s.id !== state.id);
  //   } else {
  //     this.selectedStates.push(state);
  //   }
  // }



  ///code given by priyanka

  searchForm: FormGroup;
  cities: any[] = [
      {id:1,name: 'NORTH CHENNAI', checked: false },
      { id:2,name: 'ASSAM', checked: false },
      { id:3,name: 'NORTH CHENNAI', checked: false }, 
      { id:4,name: 'Arunachal Pradesh', checked: false },
      { id:5,name: 'Assam', checked: false },
      { id:6,name: 'Bihar', checked: false },
      { id:7,name: 'Chhattisgarh', checked: false },
      { id:3,name: 'Haryana', checked: false },
      { id:8,name: 'Himachal Pradesh', checked: false },
      { id:9,name: 'Jharkhand', checked: false },
      { id:3,name: 'Karnataka', checked: false },
      { id:3,name: 'Kerala', checked: false },
      { id:3,name: 'Madhya Pradesh', checked: false },
      { id:3,name: 'Maharashtra', checked: false },
      { id:3,name: 'Manipur', checked: false },
      { id:3,name: 'Meghalaya', checked: false },
      { id:3,name: 'Mizoram', checked: false },
      { id:3,name: 'Nagaland', checked: false },
      { id:3,name: 'Odisha', checked: false }
];
   states: any[] = [{ id:1,name: 'Andhra Pradesh', checked: false },
    { id:2,name: 'Arunachal Pradesh', checked: false },
    { id:3,name: 'Assam', checked: false },
    { id:4,name: 'Bihar', checked: false },
    { id:3,name: 'Chhattisgarh', checked: false },
    { id:3,name: 'Goa', checked: false },
    { id:3,name: 'Gujarat', checked: false },
    { id:3,name: 'Haryana', checked: false },
    { id:3,name: 'Himachal Pradesh', checked: false },
    { id:3,name: 'Jharkhand', checked: false },
    { id:3,name: 'Karnataka', checked: false },
    { id:3,name: 'Kerala', checked: false },
    { id:3,name: 'Madhya Pradesh', checked: false },
    { id:3,name: 'Maharashtra', checked: false },
    { id:3,name: 'Manipur', checked: false },
    { id:3,name: 'Meghalaya', checked: false },
    { id:3,name: 'Mizoram', checked: false },
    { id:3,name: 'Nagaland', checked: false },
    { id:3,name: 'Odisha', checked: false },
    { id:3,name: 'Punjab', checked: false },
    { id:3,name: 'Rajasthan', checked: false },
    { id:3,name: 'Sikkim', checked: false },
    { id:3,name: 'Tamil Nadu', checked: false },
    { id:3,name: 'Telangana', checked: false },
    { id:3,name: 'Tripura', checked: false },
    { id:3,name: 'Uttar Pradesh', checked: false },
    { id:3,name: 'Uttarakhand', checked: false },
    { id:3,name: 'West Bengal', checked: false },
    { id:3,name: 'Andaman and Nicobar Islands', checked: false },
    { id:3,name: 'Chandigarh', checked: false },
    { id:3,name: 'Dadra and Nagar Haveli and Daman and Diu', checked: false },
    { id:3,name: 'Lakshadweep', checked: false },
    { id:3,name: 'Delhi', checked: false },
    { id:3,name: 'Puducherry', checked: false } ];
  
   category: string[] = [];
   stateSearchText: string = '';
 
   selectedCities: FormArray;
   selectedState:FormArray;
   @Input() items: any[] = []; 
   @Output() selectionChanged = new EventEmitter<any[]>(); 
   dropdownOpenCity: boolean = false;
   dropdownOpenState: boolean = false;

   selectAllVisible: boolean = false;
   uncheckAllVisible: boolean = false;

  selectAllVisibleState: boolean = false;
  uncheckAllVisibleState: boolean = false;
  filteredStates: any[];
  filteredCities: any[];
  selectedCityCount: number; 
  selectedStateCount: number; 

  buttonClicked: boolean = false;
  tooltipVisible: boolean = false;
  constructor(private fb: FormBuilder) {
    this.selectedCities = this.fb.array([]);
    this.selectedState = this.fb.array([]);
    this.filteredStates = [...this.states];
    this.filteredCities = [...this.cities];
    this.searchForm = this.fb.group({
     
      city_id: this.fb.array([]),
      state_id: this.fb.array([]),
      category_id: this.fb.array([])
    
    
    });
    
  }
  ngOnInit(): void {
    this.searchForm = this.fb.group({
      selectedCities: [[]], 
      selectedStates: [[]] 
    });
      
  }

toggleCityCheckbox(cityId: number) {
  const index = this.selectedCities.controls.findIndex(control => control.value === cityId);
  const city = this.cities.find(city => city.id === cityId);

  if (index === -1) {
      
      this.selectedCities.push(this.fb.control(cityId));
      city.checked = true;
      this.selectedCityCount++; 
  } else {
     
      this.selectedCities.removeAt(index);
      city.checked = false;
      this.selectedCityCount--; 
  }
  this.updateSelectedCityCount();
}

toggleStateCheckbox(stateId: number) {
  const index = this.selectedState.controls.findIndex(control => control.value.id === stateId);
  const state = this.states.find(item => item.id === stateId);

  if (index === -1) {
    const newState = this.fb.group({ id: stateId, name: state.name });
    this.selectedState.push(newState);
    if (state) {
      state.checked = true;
    }
  } else {
    this.selectedState.removeAt(index);
    if (state) {
      state.checked = false;
    }
  }
  this.updateSelectedStateCount();
}



updateSelectedCityCount() {
   
    this.selectedCityCount = this.selectedCities.length;
}
updateSelectedStateCount() {
   
  this.selectedStateCount = this.selectedState.length;
}


selectAllCities() {
  if (this.selectedCities.length === this.cities.length) {
      // If all cities are already selected, deselect them all
      //this.uncheckAllCities();
  } else {
      
      this.selectedCities.clear(); 
      this.cities.forEach(city => {
          this.selectedCities.push(this.fb.control(city.id));
          city.checked = true; 
      });
      this.updateSelectedCityCount();
  }
}

selectAllState() {
  if (this.selectedState.length === this.states.length) {
      // If all cities are already selected, deselect them all
      //this.uncheckAllCities();
  } else {
      
      this.selectedState.clear(); 
      this.states.forEach(state => {
          this.selectedState.push(this.fb.control(state.id));
          state.checked = true; 
      });
      this.updateSelectedStateCount();
  }
}

uncheckAllCities() {
  this.selectedCities.clear(); 
  this.cities.forEach(city => city.checked = false); 
  this.updateSelectedCityCount();
}
uncheckAllState() {
  this.selectedState.clear(); 
  this.states.forEach(states => states.checked = false); 
  this.updateSelectedStateCount();
}


  toggleDropdownCity() {
    this.dropdownOpenCity = !this.dropdownOpenCity;
  
    if (this.dropdownOpenCity) {
     
      this.selectAllVisible = true;
      this.uncheckAllVisible = true;
    } else {
      
      this.selectAllVisible = false;
      this.uncheckAllVisible = false;
    }
      

  }
 
  toggleDropdownState() {
    this.dropdownOpenState = !this.dropdownOpenState;
    if (this.dropdownOpenState) {
     
      this.selectAllVisibleState = true;
      this.uncheckAllVisibleState = true;
    } else {
      
      this.selectAllVisibleState = false;
      this.uncheckAllVisibleState = false;
    }
  }
  
  searchCities(event: Event) {
    const value = (event.target as HTMLInputElement).value.toLowerCase();
    this.cities.forEach(city => {
      city.hidden = city.name.toLowerCase().indexOf(value) === -1;
    });
  }
  applyFilterState(value: string): void {
    const filterValue = value.toLowerCase();

    this.filteredStates = this.states.filter(state =>
      state.name.toLowerCase().includes(filterValue)
    );
  }
  applyFilterCity(value: string): void {
    const filterValue = value.toLowerCase();

    this.filteredCities = this.cities.filter(city =>
      city.name.toLowerCase().includes(filterValue)
    );
  }


  closeDropdown() {
    this.dropdownOpenState = false;
    this.buttonClicked = false; 
}

closeDropdownCity() {
  this.dropdownOpenCity= false;
}
onClickButton() {
  this.buttonClicked = true;
}
 
}



