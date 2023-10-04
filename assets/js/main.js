function updateSocial(profileData){
    const social = document.getElementById('profile.social')
    social.innerHTML = profileData.social.map(social =>{
        return`
        <div class="centralizando" >
            <img src="${social.icon}" alt="">
            <p>
                <a href="${social.url}" target="_blank">${social.name}</a>
            </p>
        </div>
        `
    }).join('')
}
function updateInfo(profileData){
    const social = document.getElementById('profile.info')
    social.innerHTML = profileData.info.map(info =>{
        const href = info.link ? info.url : '';
        const str = `<div class="centralizando">
        <img src="${info.icon}" alt="${info.name}">
        <p class="localizacao" id="profile.location">   
            <a ${href}>${info.name}</a>
        </p>
    </div>
        `
        return str
    }).join('')
}
function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone
    phone.href = `tel:${profileData.phone}`

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`
}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
}

function updateLanguages(profileData) {
    const languages = document.getElementById('profile.languages')
    languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('')
}

function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio')
    portfolio.innerHTML = profileData.portfolio.map(project => {
        return `
            <li>
                <h3 ${project.github ? 'class="github"' : ''}>${project.name}</h3>
                <a href="${project.url}" target="_blank">${project.url}</a>
            </li>
        `
    }).join('')
}

function updateProfessionalExperience(profileData) {
    const professionalExperience = document.getElementById('profile.professionalExperience')
    professionalExperience.innerHTML = profileData.professionalExperience.map(experience => {
        return `
            <li>
                <h3 class="title">${experience.name}</h3>
                <p class="period">${experience.period}</p>
                <p>${experience.description}</p>
            </li>
        `
    }).join('')
}
function updateEducation(profileData) {
    const education = document.getElementById('profile.education')
    education.innerHTML = profileData.education.map(education => {
        return `
            <li>
                <h3 class="title">${education.name}</h3>
                <p class="period">${education.period}</p>
                <p>${education.institution}</p>
            </li>
        `
    }).join('')
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
    updatePortfolio(profileData)
    updateEducation(profileData)
    updateProfessionalExperience(profileData)
    updateSocial(profileData)
    updateInfo(profileData)
})()