var arr = [];
var counter = 0;
class user{
    constructor(name, profession, age) {
        this.id = ++counter;
        this.name = name;
        this.profession = profession;
        this.age = age;
    }
}

// const form = document.getElementById('employeeForm');
// const errorMessage = document.getElementById('errorMessage');
// const successMessage = document.getElementById('successMessage');
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('employeeForm');
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission
        // Get input values
        const name = document.getElementById('name-input').value;
        const profession = document.getElementById('profession-input').value;
        const age = document.getElementById('age-input').value;
        
        // Validate input values
        if (name === '' || profession === '' || age === '') {
            errorMessage.textContent = 'Error: Please Make sure All the fields are filled before adding in an employee !';
            successMessage.textContent = '';
            return;
        }
    
        // Add employee to array
        const employee = new user(name, profession, age);
        arr.push(employee);
        console.log(arr);
    
        // Clear form and display success message
        form.reset();
        successMessage.textContent = 'Success: Employee Added!';
        errorMessage.textContent = '';
        successMessage.style.display = 'block'; // Show the success message

        // Hide the success message after 3 seconds
        setTimeout(() => {
        successMessage.style.display = 'none'; // Hide the success message
        }, 3000); // 3000 milliseconds = 3 seconds
        
        // Update employee list
        updateEmployeeList();
    });
  });
  


//function to update list
function updateEmployeeList() {
    const employeeList = document.getElementById('employeeList');
    const zeroEmployeesSpan = document.getElementById('zero-employees');
    employeeList.textContent = ''; // Clear existing list
    if (arr.length === 0) {
        zeroEmployeesSpan.style.display = 'block'; // Show the span when there are no employees
    } else {
        zeroEmployeesSpan.style.display = 'none'; // Hide the span when there are employees
    }
    // Loop through employees array and create list items
    arr.forEach((employee) => {
        const li = document.createElement('li');
        li.classList.add('employee-item');

        const idSpan = document.createElement('span');
        idSpan.classList.add('id-span');
        idSpan.textContent = `${employee.id}.`;

        const nameSpan = document.createElement('span');
        nameSpan.textContent = `Name: ${employee.name}`;

        const professionSpan = document.createElement('span');
        professionSpan.textContent = `Profession: ${employee.profession}`;

        const ageSpan = document.createElement('span');
        ageSpan.textContent = `Age: ${employee.age}`;

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('del-button');
        deleteButton.textContent = 'Delete User';
        deleteButton.addEventListener('click', () => {
        deleteEmployee(employee.id);
        });

        li.appendChild(idSpan);
        li.appendChild(nameSpan);
        li.appendChild(professionSpan);
        li.appendChild(ageSpan);
        li.appendChild(deleteButton);
        employeeList.appendChild(li);
    });
}


// Function to delete employee from array
function deleteEmployee(id) {
    const index = arr.findIndex(employee => employee.id === id);
    if (index !== -1) {
        arr.splice(index, 1); // Remove employee from array
        updateEmployeeList(); // Update employee list
    }
}
