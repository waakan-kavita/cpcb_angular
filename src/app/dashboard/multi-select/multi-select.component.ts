import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder,FormGroup,FormControl } from '@angular/forms';


@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent implements OnInit {

  searchForm: FormGroup;
  states: any[] = [
    { id: 1, name: 'Andhra Pradesh', checked: false },
    { id: 2, name: 'Arunachal Pradesh', checked: false },
    { id: 3, name: 'Assam', checked: false },
    { id: 4, name: 'Bihar', checked: false },
    { id: 5, name: 'Chhattisgarh', checked: false },
    { id: 6, name: 'Goa', checked: false },
    { id: 7, name: 'Gujarat', checked: false },
    { id: 8, name: 'Haryana', checked: false },
    { id: 9, name: 'Himachal Pradesh', checked: false },
    { id: 10, name: 'Jharkhand', checked: false },
    { id: 11, name: 'Karnataka', checked: false }

  ];

  cities: any[] = [{ id: 1, name: 'North Chennai', checked: false },
  { id: 2, name: 'Assam', checked: false },
  { id: 3, name: 'NORTH CHENNAI', checked: false },
  { id: 4, name: 'Arunachal Pradesh', checked: false },
  { id: 5, name: 'Delhi', checked: false },
  { id: 6, name: 'Bihar', checked: false },
  { id: 7, name: 'Chhattisgarh', checked: false },
  { id: 8, name: 'Haryana', checked: false },
  { id: 9, name: 'Himachal Pradesh', checked: false },
  { id: 10, name: 'Jharkhand', checked: false },
  { id: 11, name: 'Karnataka', checked: false },
  { id: 12, name: 'Kerala', checked: false },
  { id: 13, name: 'Madhya Pradesh', checked: false },
  { id: 14, name: 'Maharashtra', checked: false },
  { id: 15, name: 'Manipur', checked: false }

  ];

  selectedCities: FormArray;
  selectedState: FormArray;
 
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

  buttonClickedState: boolean = false;
  buttonClickedCity: boolean = false;

  tooltipVisible: boolean = false;

  constructor(private fb: FormBuilder) {
    this.selectedCities = this.fb.array([]);
    this.selectedState = this.fb.array([]);
    
    this.filteredStates = [...this.states];
    this.filteredCities = [...this.cities];
    this.filteredCities = [...this.cities];
   

  }
  ngOnInit(): void {
   
  }

  // toggleCityCheckbox(cityId: number) {
  //   const index = this.selectedCities.controls.findIndex(control => control.value === cityId);
  //   const city = this.cities.find(city => city.id === cityId);

  //   if (index === -1) {

  //     this.selectedCities.push(this.fb.control(cityId));
  //     city.checked = true;
  //     this.selectedCityCount++;
  //   } else {

  //     this.selectedCities.removeAt(index);
  //     city.checked = false;
  //     this.selectedCityCount--;
  //   }
  //   this.updateSelectedCityCount();
  // }
  toggleCityCheckbox(cityId: number) {
    const index = this.selectedCities.controls.findIndex(control => control.value.id === cityId);
    const city = this.cities.find(item => item.id === cityId);

    if (index === -1) {
        const newCity = this.fb.control({ id: cityId, name: city.name });
        this.selectedCities.push(newCity);
        city.checked = true;
    } else {
        this.selectedCities.removeAt(index);
        city.checked = false;
    }

    this.selectedCityCount = this.selectedCities.length;

    this.updateSelectedCityCount();
}



  toggleStateCheckbox(stateId: number) {
    const index = this.selectedState.controls.findIndex(control => control.value.id === stateId);
    const state = this.states.find(item => item.id === stateId);

    if (index === -1) {
        const newState = this.fb.control({ id: stateId, name: state.name });
        this.selectedState.push(newState);
        state.checked = true;
    } else {
        this.selectedState.removeAt(index);
        state.checked = false;
    }

    // Update the count dynamically based on the length of selectedState
    this.selectedStateCount = this.selectedState.length;

    this.updateSelectedStateCount();
}




  updateSelectedCityCount() {

    this.selectedCityCount = this.selectedCities.length;
  }
  updateSelectedStateCount() {

    this.selectedStateCount = this.selectedState.length;
  }


  // selectAllCities() {
  //   if (this.selectedCities.length === this.cities.length) {
  
  //     this.uncheckAllCities();
  //   } else {

  //     this.selectedCities.clear();
  //     this.cities.forEach(city => {
  //       this.selectedCities.push(this.fb.control(city.id));
  //       city.checked = true;
  //     });
  //     this.updateSelectedCityCount();
  //   }
  // }
  selectAllCities() { 
    this.selectedCities.clear();
   
     this.cities.forEach(city => {
       this.selectedCities.push(this.fb.control({ id: city.id, name: city.name }));
       city.checked = true; 
     });
    this.selectedCityCount = this.selectedCities.length;
   
   }
   

 
  selectAllState() {
   this.selectedState.clear();
  
    this.states.forEach(state => {
      this.selectedState.push(this.fb.control({ id: state.id, name: state.name }));
      state.checked = true; 
    });
   this.selectedStateCount = this.selectedState.length;
  
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


  closeDropdownState() {
    this.dropdownOpenState = false;
    this.filteredStates = this.states;
  }
 
  closeDropdownCity() {
    this.dropdownOpenCity = false;
    this.filteredCities=this.cities;
  }
  onClickButtonState() {
    this.buttonClickedState = true;
  }
  onClickButtonCity() {
    this.buttonClickedCity = true;
  }

}