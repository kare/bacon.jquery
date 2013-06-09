var expect = chai.expect

describe('textFieldValue', function() {
  var field
  beforeEach(function() {
    $('#bacon-dom').html('<input type="text" value="defaultVal">')
    field = $('#bacon-dom input')
  })

  describe('with initVal', function() {
    it('sets value to DOM', function() {
        var binding = Bacon.$.textFieldValue(field, 'initVal')
        expect(field.val()).to.equal('initVal')
    })
    it('sets the initVal as the initial value of the Binding', function() {
      var binding = Bacon.$.textFieldValue(field, 'initVal')
      specifyValue(binding, 'initVal')
    })
  })

  describe('without initVal', function() {
    it('leaves DOM unaffected', function() {
        var binding = Bacon.$.textFieldValue(field)
        expect(field.val()).to.equal('defaultVal')
    })
    it('uses value from DOM as initial value of the Binding', function() {
      var binding = Bacon.$.textFieldValue(field)
      specifyValue(binding, 'defaultVal')
    })
  })

  describe('when pushing value to Binding', function() {
    it('sets value to DOM', function() {
        Bacon.$.textFieldValue(field) .push('newVal')
        expect(field.val()).to.equal('newVal')
    })
  })

  function specifyValue(binding, value) {
    binding.onValue(function(value) {
      expect(value).to.equal(value)
    })
  }
})
