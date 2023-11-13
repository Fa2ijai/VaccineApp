describe('Hospitals', () => {
  it('Should display Video Correctly and navigate to /hospital', () => {
      cy.visit("/");
      cy.wait(5000)
      cy.get('video').should('exist')
      cy.get("video").should("have.prop", "paused", false);
      cy.wait(5000);
      cy.get("button").contains("Pause").as('videoButton').click();
      cy.get("video").should("have.prop", "paused", true);
      cy.get("button").contains("Observe Hospital").click();
      cy.wait(5000)
      cy.get("img").should("have.length.at.least", 3);

  })
})