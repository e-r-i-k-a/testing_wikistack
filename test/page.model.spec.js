const Page = require ('../models').Page;
const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);


describe('Page model', function () {
  beforeEach(function(done) {
    Page.sync({force: true})
      .then(() => {
        done();
      }).catch(err => done(err));
  });

  describe('Virtuals', function () {
    let page;
    before(function(){
      page = Page.build();       //creates a virtual table
    });
    describe('route', function () {
      it('returns the url_name prepended by "/wiki/"', function () {
        page.urlTitle = 'WTF_this_is_a_title';
        expect(page.route).to.equal('/wiki/WTF_this_is_a_title');
      });
    });
    describe('renderedContent', function () {
      it('converts the markdown-formatted content into HTML', function () {
        page.content = 'this is some sample text';
        expect(page.renderedContent).to.equal('<p>this is some sample text</p>\n');
      });
    });
  });

  describe('Class methods', function () {

    before(function(done) {
      Page.create({
        title: 'foo',
        content: 'bar',
        tags: ['foo', 'bar']
      }).then(function () {
        done();
      }).catch()
    });
//FIX THIS
  //   describe('findByTag', function () {
  //     it('gets pages with the search tag', () => {
  //       expect(Page.findByTag('foo').to.equal())
  //     });
  //     it('does not get pages without the search tag');
  //   });
  // });
    
  describe('Instance methods', function () {
    describe('findSimilar', function () {
      it('never gets itself');
      it('gets other pages with any common tags');
      it('does not get other pages without any common tags');
    });
  });
    
  describe('Validations', function () {
    it('errors without title');
    it('errors without content');
    it('errors given an invalid status');
  });
    
  describe('Hooks', function () {
    it('it sets urlTitle based on title before validating');
  });
});