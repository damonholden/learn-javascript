// Functions can have default values:

personInfo = (person, info = `no information provided`) =>
  `${person}: ${info}`;

personInfo(`Kayleigh`);
personInfo(`Tom`, `loser`);
