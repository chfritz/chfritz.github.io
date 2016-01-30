// in myapp.js: reactive helper function
// weather = new Blaze.Var();
// Template.forecast.prediction = function () {
//   return weather.get();
// };

function get(name) {
  return $('.data#'+name)[0].innerHTML;
}

Template.experience.helpers({
  jobs: function() {
    return [
      {
        image: "parc.png",
        title: "Area Manager, \"Representation and Planning\"",
        place: "Systems Science Lab, Palo Alto Research Center, Palo Alto, CA",
        description: get("job-am-parc"),
        from: "August 2014",
        to: "Present"
      }, {
        image: "bibbase.png",
        title: "Founder and CEO",
        place: "BibBase",
        description: get("job-bibbase"),
        from: "2005",
        to: "Present",
      }, {
        image: "parc.png",
        title: "Research Scientist",
        place: "Intelligent Systems Lab, Palo Alto Research Center, Palo Alto, CA",
        description: get("job-mrs-parc"),
        from: "October 2010",
        to: "July 2014"
      },{
        image: "isi.png",
        title: "Post Doctoral Research Associate",
        place: "Information Sciences Institute, University of Southern California, Marina del Rey, CA",
        description: get("job-isi"),
        from: "May 2009",
        to: "September 2010"
      }, {
        image: "bell-labs.jpg",
        title: "Summer Intern",
        place: "Alcatel-Lucent Bell Labs, Murray Hill, NJ",
        description: "",
        from: "July 2007",
        to: "September 2007"
      },{
        image: "rwth.jpg",
        title: "Research Assistant, RoboCup",
        place: "Knowledge Based Systems Group (KBSG), RWTH Aachen University, Germany",
        description: get("job-ra-aachen"),
        from: "November 2001",
        to: "July 2004"
      },{
        image: "sap.png",
        title: "Summer Intern",
        place: "SAP, Walldorf, Germany",
        description: "",
        from: "July 2001",
        to: "September 2001"
      }
    ]
  }
});
