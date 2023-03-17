const log = console.log;
// ROOT | MAIN APP CONTAINER
const root = document.getElementById('root');
// VARIABLES
const fullName = document.getElementById('name');
const role = document.getElementById('role');
const companyName = document.getElementById('company-name');
const jobTitle = document.getElementById('job-title');
const skill = document.getElementById('skill');
const achievement = document.getElementById('achievement');
const contactInformation = document.getElementById('email');

// LETTER HEADER
const ref = document.querySelector('ref');

// LETTER BODY
var outputContainer = document.querySelector('output-container')
var letterBody = document.querySelector('.content');

// CONTACT INFO 
var contactName = document.querySelector('.full-name');
var contactEmail = document.querySelector('.contact');

// DOWNLOAD BUTTON
const downloadBtn = document.getElementById('download-btn');

// EVENT LISTENER
downloadBtn.addEventListener('click', generatePDF);


function generatePDF() {

    log(fullName.value)

    letterBody.innerHTML = `
    <div class="content">
            I am writing to apply for the <span>${role.value}</span> position at <span>${companyName.value}</span>. I am a highly motivated individual with
            great
            customer service skills and experience, so I would be a valuable asset to your team.
            <br>
            <br>
            In my previous customer service roles, I have always gone above and beyond for customers. I have a natural
            ability to build relationships and solve problems, so I am confident that I can provide excellent service to
            your customers.
            <br>
            <br>
            My previous role as a <span>${jobTitle.value}</span> has given me the organizational skills and experience necessary to excel
            in
            this role. Moreover, I managed to achieve <span>${achievement.value}</span> while working at my previous job, which proves
            that I am capable of <span>${skill.value}</span>.
            <br>
            <br>
            By joining your team, I hope to develop my skills further and contribute to the success of the business. I
            see
            myself fitting in long-term, and I am eager to use my skills to help the company achieve its customer
            service
            goals.
            <br>
            <br>
            Please find attached my resume and certificates for you to read. I am able to start work immediately.
            <br>
            <br>
            Thank you for your time and consideration. I look forward to hearing from you soon.
            <br>
            <br>
            Sincerely,
          </div>
`;

    contactName.innerHTML = `
    <h3 class="full-name">
        ${fullName.value}
    </h3>
    `;

    contactEmail.innerHTML = `
    <h3 class="contact">
        ${contactInformation.value}
    </h3>
    `;
}
