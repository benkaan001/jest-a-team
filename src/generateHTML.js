// design cards here

const generateManager = (manager) => {
  return `
  <div class="col-sm-4">
        <div class="card h-100">
            <div class="card-header navbar-light" style="background-color: cornflowerblue;">
                <h3>${manager.name}</h3>
                <h4> <samp>The Manager <i class="fas fa-mug-hot"></i></samp> </h4>
            </div>
            <div class="card-body">
                <p class="id"><samp>ID:</samp> ${manager.id}</p>
                <p class="email"><samp>Email: </samp><a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office"><samp>Office Phone: </samp>${manager.officeNumber}</p>
            </div>
        </div>
    </div>

`;
};

const generateEngineer = (engineer) => {
  return `

  <div class="col-sm-4">
  <div class="card h-100">
      <div class="card-header navbar-light" style="background-color: cornflowerblue;">
          <h3>${engineer.name}</h3>
          <h4><samp>The Engineer <i class="fas fa-laptop-code"></i></samp> </h4>
      </div>
      <div class="card-body">
          <p class="id"><samp>ID: </samp> ${engineer.id}</p>
          <p class="email"><samp>Email: </samp><a href="mailto:${engineer.email}">${engineer.email}</a></p>
          <p class="github"><samp>Github: </samp><a href="https://github.com/${engineer.github}" "target="_blank">${engineer.github}</a></p>
      </div>
  </div>
</div>

    
`;
};

const generateIntern = (intern) => {
  return `
  <div class="col-sm-4">
  <div class="card h-100">
      <div class="card-header navbar-light" style="background-color: cornflowerblue;">
          <h3>${intern.name}</h3>
          <h4><samp>The Intern <i class="fas fa-graduation-cap"></i></samp></h4>
      </div>
      <div class="card-body">
          <p class="id"><samp>ID: </samp>${intern.id}</p>
          <p class="email"><samp>Email: </samp><a href="mailto:${intern.email}">${intern.email}</a></p>
          <p class="school"><samp>School: </samp>${intern.school}</p>
      </div>
</div>
</div>

    
    `;
};

generateHTML = (data) => {
  cardArry = [];

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    if (role === "Manager") {
      const managerCard = generateManager(employee);
      cardArry.push(managerCard);
    }

    if (role === "Engineer") {
      const engineerCard = generateEngineer(employee);
      cardArry.push(engineerCard);
    }

    if (role === "Intern") {
      const internCard = generateIntern(employee);
      cardArry.push(internCard);
    }
  }

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
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    
</head>
<body>
    <header> 
        <nav class="navbar btn btn-danger">
           <span class="navbar-brand mb-0 h1 w-100 text-center" style="font-size: 25px;"><samp>More Than Just A Team</samp></span>
        </nav>
    </header>
    <main>
        <div class="row justify-content-center">
      
          ${cardArry}
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
