
const generateEngineer = engineerArr => {
    return `
        ${engineerArr
        .filter(({ engineer }) => engineer)
        .map(({ engineerName, engineerID, engineerEmail, engineerGitHub }) => {
            return `
        <div class="card" style="width: 18rem;">
        <div class="card-header bg-primary text-white">
            <h5 class="card-title">${engineer.getName()}</h5>
            <h6 class="card-title">${engineer.getRole()}</h6>
        </div>
        <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">Office Number: ${engineer.getGitHub()}</li>
        </ul>
        </div>
        </div>
    `;
    })
    .join('')}
    
    ${engineerArr
        .filter(({ engineer }) => engineer)
        .map(({ engineerName, engineerID, engineerEmail, engineerGitHub }) => {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-header bg-primary text-white">
            <h5 class="card-title">${engineer.getName()}</h5>
            <h6 class="card-title">${engineer.getRole()}</h6>
        </div>
        <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">Office Number: ${engineer.getGitHub()}</li>
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
    <div>${generateEngineer(engineer)}</div>
    </section>
    </html>
    `;
}

module.exports = generatePage;