
// design cards here

const managerCard = (manager) => {
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

const engineerCard = (engineer) => {}

generateHTML = () => {}

















module.exports = generateHTML;
