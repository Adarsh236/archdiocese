import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-task',
  templateUrl: './second-task.component.html',
  styleUrls: ['./second-task.component.css'],
})
export class SecondTaskComponent implements OnInit {
  people = [
    { name: 'jason', age: 63 },
    { name: 'michela', age: 8 },
    { name: 'kevin', age: 40 },
    { name: 'frances', age: 20 },
    { name: 'lilly', age: 13 },
  ];

  constructor() {}

  ngOnInit(): void {
    this.youngerPeople();
    this.adultPeople();
    this.ageRange();
    this.copyArray();
    this.increaseAge();
    this.capitalizedName();
    this.logNames();
    this.logAgeName();
  }

  youngerPeople(): void {
    const ff = this.people.filter((person) => person.age < 15);
    console.log('youngerPeople', ff);
  }

  adultPeople(): void {
    const ff = this.people.filter((person) => person.age > 17);
    console.log('adultPeople', ff);
  }

  ageRange(): void {
    const ff = this.people.filter(
      (person) => person.age > 10 && person.age > 60
    );
    console.log('ageRange', ff);
  }

  copyArray(): void {
    const ff = this.people.filter((person) => person.name.length === 5);
    console.log('copyArray', ff);
  }

  increaseAge(): void {
    const ff = this.people.map((person) => ({
      name: person.name,
      age: person.age + 10,
    }));
    console.log('increaseAge', ff);
  }

  capitalizedName(): void {
    const ff = this.people.map((person) => ({
      name: person.name.toLocaleUpperCase(),
      age: person.age,
    }));
    console.log('capitalizedName', ff);
  }

  logNames(): void {
    console.log(
      '1st and 4th element names',
      this.people[0].name,
      ' - ',
      this.people[3].name
    );
    console.log(
      '3rd and 5th element names',
      this.people[2].name,
      ' - ',
      this.people[4].name
    );
  }

  logAgeName(): void {
    console.log('logAgeName START');
    this.people.forEach((person) => {
      console.log({
        age: person.age,
        name: person.name,
      });
    });
    console.log('logAgeName END');
  }
}