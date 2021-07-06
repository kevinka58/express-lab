const skills = [
    { skill: "I can make my farts sound like a barking dog", mastered: false},
    { skill: "Make a PB&J", mastered: false},
    { skill: "Jump rope", mastered: false},
];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    updateOne
  };

  function getOne(id) {
    return skills[id];
  }

  function getAll() {
    return skills;
  }

  function create(skill) {
    skills.push(skill);
  }

  function deleteOne(id) {
    skills.splice(id, 1);
  }

  function updateOne(id, body) {
    skills[id] = body;
  }

  
  