import * as helpers from '../support/randomvalues'

describe('Contact US Form Automation Script', () => {
  beforeEach(() => {
    cy.visit('https://www.founderandlightning.com/contact')
  })


  it("Verify Each field input", () => {

    // User First name
    cy.get('#firstname-b15d4232-7672-429d-81fd-a00020bddf95')
      .type(helpers.user().Name)
      .should("have.value", helpers.text)
      .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
      .type('{del}{selectall}{backspace}')
      // Delay each keypress by 1 sec
      .type('Anand', { delay: 1000 })
      .should('have.value', 'Anand')
      .clear()
      .should('have.attr', 'required')
  
   // User Last name
    cy.get('#lastname-b15d4232-7672-429d-81fd-a00020bddf95')
      .type(helpers.user().LName)
      .should("have.value", helpers.ltext)
      .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
      .type('{del}{selectall}{backspace}')
    // Delay each keypress by .1 sec
      .type('Kadakal', { delay: 100 })
      .should('have.value', 'Kadakal')
      .clear()
      .should('have.attr', 'required')
    
    // Email of the User
    cy.get('#email-b15d4232-7672-429d-81fd-a00020bddf95')
      .type( helpers.user().Email)
      .should("have.value",  helpers.user().Email)
      .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
      .type('{del}{selectall}{backspace}')
      // Delay each keypress by 0.1 sec
      .type('anandskadakal@gmail.com', { delay: 100 })
      .should('have.value', 'anandskadakal@gmail.com')
      .clear()
      .should('have.attr', 'required')

        // Contact number of the User
    cy.get('#mobilephone-b15d4232-7672-429d-81fd-a00020bddf95')
      .type(helpers.user().PNumber)
      .should("have.value", helpers.pnumber)
      .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
      .type('{del}{selectall}{backspace}')
       // Delay each keypress by 0.1 sec
      .type('8073071356', { delay: 100 })
      .should('have.value', '8073071356')
      .wait(2000)
      .clear()
      .should('have.attr', 'required')


       // How did we hear of it - Dropdown 
    cy.get('select').find('option')
      .should('have.length',12)
    cy.get('select option:disabled')
      .should('have.length', 1)
    cy.get('select')
      .select('Referral').should('have.value', 'Referral')
    cy.get('select option:selected').should('have.text', 'Referral')
      .wait(2000)
    cy.get('select')
      .select('Word of mouth').should('have.value', 'Word of mouth')
    cy.get('select option:selected').should('have.text', 'Word of mouth')

    // Message field validation
    cy.get('#message-b15d4232-7672-429d-81fd-a00020bddf95')
      .type("Hi")
      .type('{del}{selectall}{backspace}')
      .should('have.attr', 'required')


  });


  it("Can fill the form with valid value with Submit", () => {
    cy.get('.m-0').contains("Whether you’re a would-be founder, our next superstar looking for a future role, or an investor interested in our model, we’d love to meet you.")
  

    cy.get('#firstname-b15d4232-7672-429d-81fd-a00020bddf95')
      .type("Anand")
      .should("have.value", "Anand");

    cy.get('#lastname-b15d4232-7672-429d-81fd-a00020bddf95')
      .type("Kadakal")
      .should("have.value", "Kadakal");

    cy.get('#email-b15d4232-7672-429d-81fd-a00020bddf95')
      .type("anandskadakal@gmail.com")
      .should("have.value", "anandskadakal@gmail.com");

    cy.get('#mobilephone-b15d4232-7672-429d-81fd-a00020bddf95')
      .type("8073071356")
      .should("have.value", "8073071356");
    
    cy.get('#how_did_you_hear_about_us_-b15d4232-7672-429d-81fd-a00020bddf95')
       .select("LinkedIn")
    
    cy.get('#message-b15d4232-7672-429d-81fd-a00020bddf95')
      .type("Thanks")
      .should("have.value", "Thanks");

    cy.get("input[value='Send Message >']").click();

  });

});


