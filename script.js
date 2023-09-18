//create a function that change the color of all <h5> tag in id=skill
function skillColorRed() {
  let skillList = ["skill", "experience", "education"];
  for (let i of skillList) {
    //fetch the all the id's using querySelector
    let skillDetails = document.querySelector(`#${i}`);

    //prepare an array of NodeList from skillDetails, and to each items
    //change the color
    let nodeList = skillDetails.getElementsByTagName("h5");

    Array.from(nodeList).forEach((e) => {
      e.style.color = "red";
    });
  }
}
skillColorRed();

//create a function that display the details whenever we click on any skillSet
function skillFunc(skillName) {
  //get the all skillSet class elements
  let skillInfo = document.querySelectorAll(".skillSet");
  //since we get in List, use Array.from() with forEach() to remove existing active class i.e. = block
  Array.from(skillInfo).forEach((e) => {
    e.classList.remove("active");
  });
  //once we click on any of the skills, we set class active to skillset skills, experience & educ. as active=block
  let skillId = document.getElementById(skillName);
  skillId.classList.add("active");
}
