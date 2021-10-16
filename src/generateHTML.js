
// design cards here

const generateManager = (manager) => {
    return `
    
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${manager.name}</h5>
    <p class="card-text"> This is our manager ${manager.name}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"> ID: ${manager.id}</li>
    <li class="list-group-item"> Office Number: ${manager.officeNumber}</li>
    <li class="list-group-item"> Email: ${manager.email}</li>
  </ul>
 
</div>
`;
   
};

const generateEngineer = (engineer) => {
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${engineer.name}</h5>
      <p class="card-text"> This is our intern ${engineer.name}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"> ID: ${engineer.id}</li>
      <li class="list-group-item"> GitHub: ${engineer.github}</li>
      <li class="list-group-item"> Email: ${engineer.email}</li>
    </ul>
   
  </div>
    
    `;
};

const generateIntern = (intern) => {
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${intern.name}</h5>
      <p class="card-text"> This is our intern ${intern.name}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"> ID: ${intern.id}</li>
      <li class="list-group-item"> School: ${intern.school}</li>
      <li class="list-group-item"> Email: ${intern.email}</li>
    </ul>
   
  </div>
    
    
    `
};

generateHTML = (data) => {

    cardArry =[];

    for (let i=0; i<data.length; i++){
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = generateManager(employee); 
            cardArry.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);
            cardArry.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = generateIntern(employee);
            cardArry.push(internCard);
        }
    }
}

















module.exports = generateHTML;
