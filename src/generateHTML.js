
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
      <p class="card-text"> This is our engineer ${engineer.name}</p>
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

const employeeCards = cardArry.join('');

const generateTeam = generateFinalPage(employeeCards);
return generateTeam;

};



const generateFinalPage = (employeeCards) => {
    return `

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jest-a-Team</title>
    
    <!-- put bootstrap here -->
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
     <!-- Font Awesome Icons-->
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header> 
        <nav>
            <div> Team Header
            </div>
        </nav>
    </header>
    <main>
        <div>
          Employee Info Goes Here 
          ${employeeCards}
        </div>
    </main>
    
</body>
<!-- bootstrap JS plugin package-->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</html>
    
    `;
};




module.exports = generateHTML;
