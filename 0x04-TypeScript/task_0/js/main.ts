interface Student{
    firstName: string,
    lastName: string,
    age: number,
    location: string,
}

const student1: Student = {
    firstName: 'Ali',
    lastName: 'King',
    age: 23,
    location: 'Tokyo',
}

const student2: Student = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 32,
    location: 'Osaka',
}

const studentsList = [student1, student2];

const table = document.createElement('table');
studentsList.forEach(student => {
    const row = document.createElement('tr');
    const firstNameCell = document.createAttribute('td');
    const locationCell = document.createElement('td');

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    table.appendChild(row);
    document.body.appendChild(table);
});
