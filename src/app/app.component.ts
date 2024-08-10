import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    users = [
        {
            firstname: 'John',
            lastname: 'Doe',
            email: 'john.doe@example.com',
            mobile: '1234567890',
            city: 'New York',
            state: 'NY',
            pincode: '10001',
            dateOfBirth: '1990-01-01',
            gender: 'Male'
        },
        {
            firstname: 'Jane',
            lastname: 'Smith',
            email: 'jane.smith@example.com',
            mobile: '2345678901',
            city: 'Los Angeles',
            state: 'CA',
            pincode: '90001',
            dateOfBirth: '1992-02-02',
            gender: 'Female'
        },
        {
            firstname: 'Alice',
            lastname: 'Johnson',
            email: 'alice.johnson@example.com',
            mobile: '3456789012',
            city: 'Chicago',
            state: 'IL',
            pincode: '60601',
            dateOfBirth: '1994-03-03',
            gender: 'Female'
        },
        {
            firstname: 'Bob',
            lastname: 'Brown',
            email: 'bob.brown@example.com',
            mobile: '4567890123',
            city: 'Houston',
            state: 'TX',
            pincode: '77001',
            dateOfBirth: '1991-04-04',
            gender: 'Male'
        },
        {
            firstname: 'Charlie',
            lastname: 'Davis',
            email: 'charlie.davis@example.com',
            mobile: '5678901234',
            city: 'Phoenix',
            state: 'AZ',
            pincode: '85001',
            dateOfBirth: '1993-05-05',
            gender: 'Male'
        },
        {
            firstname: 'Daisy',
            lastname: 'Miller',
            email: 'daisy.miller@example.com',
            mobile: '6789012345',
            city: 'Philadelphia',
            state: 'PA',
            pincode: '19019',
            dateOfBirth: '1995-06-06',
            gender: 'Female'
        },
        {
            firstname: 'Edward',
            lastname: 'Wilson',
            email: 'edward.wilson@example.com',
            mobile: '7890123456',
            city: 'San Antonio',
            state: 'TX',
            pincode: '78201',
            dateOfBirth: '1996-07-07',
            gender: 'Male'
        },
        {
            firstname: 'Fiona',
            lastname: 'Moore',
            email: 'fiona.moore@example.com',
            mobile: '8901234567',
            city: 'San Diego',
            state: 'CA',
            pincode: '92101',
            dateOfBirth: '1997-08-08',
            gender: 'Female'
        },
        {
            firstname: 'George',
            lastname: 'Taylor',
            email: 'george.taylor@example.com',
            mobile: '9012345678',
            city: 'Dallas',
            state: 'TX',
            pincode: '75201',
            dateOfBirth: '1998-09-09',
            gender: 'Male'
        },
        {
            firstname: 'Hannah',
            lastname: 'Anderson',
            email: 'hannah.anderson@example.com',
            mobile: '0123456789',
            city: 'San Jose',
            state: 'CA',
            pincode: '95101',
            dateOfBirth: '1999-10-10',
            gender: 'Female'
        }
    ];

    searchName = '';
    selectedCity = '';
    selectedGender = '';

    get filteredUsers() {
        return this.users.filter(
            (user) =>
                (this.searchName === '' ||
                    (user.firstname + ' ' + user.lastname)
                        .toLowerCase()
                        .includes(this.searchName.toLowerCase())) &&
                (this.selectedCity === '' || user.city === this.selectedCity) &&
                (this.selectedGender === '' ||
                    user.gender === this.selectedGender)
        );
    }

    get uniqueCities() {
        return [...new Set(this.users.map((user) => user.city))];
    }

    calculateAge(dateOfBirth: string): number {
        const dob = new Date(dateOfBirth);
        const ageDifMs = Date.now() - dob.getTime();
        const ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}
