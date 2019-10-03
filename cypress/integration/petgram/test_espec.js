/* global describe, it, expect, cy*/
describe("test basico", function(){
    it('para ver si funciona', function(){
        expect(true).to.equal(true)
    }),
    it('para ver si funciona', function(){
        cy.visit('/')
    }),
    it("navegar en categorias", function(){
        cy.visit('/pet/1')
        cy.get('article')
    })
})