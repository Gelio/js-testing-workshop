beforeEach(() => {
  cy.visit('http://localhost:3000');
});

describe('Counter', () => {
  it('should render 0 by default', () => {
    cy.get('.counter-value').should('have.text', '0');
  });

  it('should render 1 after clicking once', () => {
    cy.get('.increment-counter').click();
    cy.get('.counter-value').should('have.text', '1');
  });

  it('should render 50 after clicking 50 times', () => {
    const incrementCounterButton = cy.get('.increment-counter');
    for (let i = 0; i < 50; i++) {
      incrementCounterButton.click();
    }

    cy.get('.counter-value').should('have.text', '50');
  });
});

describe('Reflected text', () => {
  it('should be empty by default', () => {
    cy.get('.reflected-text').should('have.text', '');
  });

  it('should be equal to whatever is typed in the input', () => {
    const typedText = 'Hello world!';
    cy.get('.example-text-input').type(typedText);
    cy.get('.reflected-text').should('have.text', typedText);
  });
});
