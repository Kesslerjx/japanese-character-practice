const SETTINGS_ICON = '../icons/settings.svg';

//Builds the home page and adds it to the main element
function buildHomePage() {

    //Get main element
    const main = document.querySelector('main');

    //Create elements
    const div = document.createElement('div');
    const settingsBtn = document.createElement('img');
    const statDiv = document.createElement('div');
    const statP = document.createElement('p');
    const character = document.createElement('p');
    const buttonsDiv = document.createElement('div');
    const showButton = document.createElement('button');

    //Add classes
    div.classList.add('home-page');
    settingsBtn.classList.add('settings-icon');
    statDiv.classList.add('stat-div');
    character.classList.add('character');
    buttonsDiv.classList.add('buttons-div');
    showButton.classList.add('normal-button');

    settingsBtn.src = SETTINGS_ICON;
    statP.textContent = "100 / 200";
    character.textContent = 'か';
    showButton.textContent = 'Show';

    showButton.addEventListener('click', showAnswer);

    statDiv.append(statP);
    buttonsDiv.append(showButton);
    div.append(settingsBtn, statDiv, character, buttonsDiv);
    main.append(div);
}

function showAnswer() {
    console.log('Show answer pressed');
}

export { buildHomePage }