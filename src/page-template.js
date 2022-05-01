const generatePage = (team) => {
    console.log(team)
    let html = ""
    for(let i = 0; i < team.length; i++) {

    if(team[i].getRole() === "Manager") {

        html += `<div class="card" style="width: 18rem;">
        <div class="card-header bg-primary text-white">
            <h5 class="card-title">${team[i].getName()}</h5>
            <h6 class="card-title">${team[i].getRole()}</h6>
            <ul class="list-group list-group-flush">
        </div>
        <div class="card-body">
                <li class="list-group-item">ID: ${team[i].getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${team[i].getEmail()}">${team[i].getEmail()}</a></li>
                <li class="list-group-item">Office Number: ${team[i].getOfficeNumber()}</li>
            </ul>
        </div>
    </div>`
    }
    if(team[i].getRole() === "Engineer") {
        html += `<div class="card" style="width: 18rem;">
        <div class="card-header bg-primary text-white">
            <h5 class="card-title">${team[i].getName()}</h5>
            <h6 class="card-title">${team[i].getRole()}</h6>
            <ul class="list-group list-group-flush">
        </div>
        <div class="card-body">
                <li class="list-group-item">ID: ${team[i].getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${team[i].getEmail()}">${team[i].getEmail()}</a></li>
                <li class="list-group-item">Office Number: ${team[i].getGitHub()}</li>
            </ul>
        </div>
    </div>`
    }
    if(team[i].getRole() === "Intern") {

        html += `<div class="card" style="width: 18rem;">
        <div class="card-header bg-primary text-white">
            <h5 class="card-title">${team[i].getName()}</h5>
            <h6 class="card-title">${team[i].getRole()}</h6>
            <ul class="list-group list-group-flush">
        </div>
        <div class="card-body">
                <li class="list-group-item">ID: ${team[i].getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${team[i].getEmail()}">${team[i].getEmail()}</a></li>
                <li class="list-group-item">Office Number: ${team[i].getSchool()}</li>
            </ul>
        </div>
    </div>`
    }
}

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
    <div class="card-deck">
    <div class="container">
    <div class="row">
    ${html}
    </div>
    </div>
    </div>
    </section>
    </html>
    `;
}

module.exports = generatePage;