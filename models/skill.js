const skills = [
    {skill: 'Feed Dogs', mastered: true},
    {skill: 'Learn Express', mastered: false},
    {skill: 'Buy Milk', mastered: false}
  ];
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    updateOne
  };
  function updateOne(id, skill) {
    skills.splice(id, 1, skill);
  }
  function deleteOne(id) {
    skills.splice(id, 1);
  }
  function create(skill) {
    skills.push(skill);
  }
  function getOne(id) {
    return skills[id];
  }
  function getAll() {
    return skills;
  }