import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(bio){  
  if (bio.length > 210) {
    var theString = bio.substring(0,210) + " ... ";
    return new Ember.Handlebars.SafeString(theString);
  }

  else {
      return bio;
  }

});