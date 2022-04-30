
const generateEngineer = engineerArr => {
    return `
        ${engineerArr
        .filter(({ engineerName }) => engineerName)
        .map(({ engineerName, engineerID, engineerEmail, engineerGitHub }) => {
            return `
        <div class="card" style="width: 18rem;">
        <div class="card-header bg-primary text-white">
            <h5 class="card-title">${engineerName.getName()}</h5>
            <h6 class="card-title">${employeeType.getRole()}</h6>
        </div>
        <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineerID.getId()}</li>
            <li class="list-group-item">Email: <a href="${engineerEmail.getEmail()}">${engineerEmail.getEmail()}</a></li>
            <li class="list-group-item">Office Number: ${engineerGitHub.getGitHub()}</li>
        </ul>
        </div>
        </div>
    `;
    })
    .join('')}
    
    ${engineerArr
    .filter(({ engineerName }) => !engineerName)
    .map(({ engineerName, engineerID, engineerEmail, engineerGitHub }) => {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-header bg-primary text-white">
            <h5 class="card-title">${engineerName.getName()}</h5>
            <h6 class="card-title">${employeeType.getRole()}</h6>
        </div>
        <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineerID.getId()}</li>
            <li class="list-group-item">Email: <a href="${engineerEmail.getEmail()}">${engineerEmail.getEmail()}</a></li>
            <li class="list-group-item">Office Number: ${engineerGitHub.getGitHub()}</li>
        </ul>
        </div>
        </div>
    `;
    })
    .join('')}
    `;
}

const generatePage = () => {
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="./dist/style.css" />
    <title>Team Profile</title>
    </head>

    <header>
        <h1>My Team</h1>
    </header>

    <section>
    <div class="card" style="width: 18rem;">
        <div class="card-header bg-primary text-white">
            <h5 class="card-title">${manager.getName()}</h5>
            <h6 class="card-title">${manager.getRole()}</h6>
            <ul class="list-group list-group-flush">
        </div>
        <div class="card-body">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
    </section>
    </html>
    `;
}

module.exports = generatePage;