// This recipe shows how to interact with a range input (slider)

// Eventually, this will be expanded to includes examples of interacting
// with various form elements

describe("About Page", function() {
  beforeEach(function() {});

  it("Set up first call to /api/getData", function() {
    cy.request("POST", "http://localhost:8080/api/ramlizer", {
      route: "/api/getData",
      method: "get",
      nextResponseCode: "200",
      nextExampleName: "exampleOne"
    }).then(response => {
      // response.body is automatically serialized into JSON
      expect(response.body).to.have.property("nextExampleName", "exampleOne"); // true
    });
  });

  it('The first visit to the page should reveal the text "Example One"', function() {
    cy.visit("http://localhost:8888/about");
    cy.get(".message").contains("The status is Example One");
  });

  it("Set up second call to /api/getData", function() {
    cy.request("POST", "http://localhost:8080/api/ramlizer", {
      route: "/api/getData",
      method: "get",
      nextResponseCode: "200",
      nextExampleName: "exampleTwo"
    }).then(response => {
      // response.body is automatically serialized into JSON
      expect(response.body).to.have.property("nextExampleName", "exampleTwo"); // true
    });
  });

  it('The second visit to the page should reveal the text "Example Two"', function() {
    cy.visit("http://localhost:8888/about");
    cy.get(".message").contains("The status is Example Two");
  });
});
