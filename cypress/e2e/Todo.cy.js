describe('Todo', () => {
  it('Can add, complete and remove Todo', () => {
    const todo = 'Perform E2E test';

    cy.visit('http://localhost:3000');

    // add todo
    cy.get('input').type(todo);
    cy.get('button#add').click();
    cy.wait(100);
    cy.get('h3').should('have.text', todo);

    // complete todo
    cy.get('input[type="checkbox"]').click();
    cy.wait(100);

    // remove todo
    cy.get('button.remove').click();
    cy.get('h3').should('not.exist');
  })
})