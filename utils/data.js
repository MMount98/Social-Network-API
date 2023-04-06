const userNames = [
  "mmount",
  "edaClaw",
  "AzuraDaWitch",
  "AmityB",
  "LuzNoceda",
  "KingClaw",
  "DevWorker",
  "Ashe",
  "tiredGuy43",
  "Hooty",
  "Crash",
  "Dipper",
  "GruncleStan",
  "flowerChild",
  "tommyPickles",
];

const emails = [
  "mmount@gmail.com",
  "badGirlCoven@gmail.com",
  "AzuraBookClub@gmail.com",
  "devWorld@gmail.com",
  "apple@gmail.com",
  "covenMate@gmail.com",
  "mysteryShake@gmail.com",
  "James.smith@du.com",
  "fox@gmail.com",
  "seed@seeing.com",
  "flowers@yahoo.com",
  "waterBoy@outlook.com",
  "toh@gmail.com",
  "comfyCozy@aol.com",
  "test@test.com",
];

const thoughts = [
  "We should fight people",
  "Coding Is cool",
  "Grass is not as good as succulents",
  "Apple need usb-c charging ages ago",
  "Studio Ghibli is a great production company",
  "I would love to go to Japan some day",
  "The human world is strange",
  "German is cool",
  "I am tired",
  "I wish I could live in the world of Overwatch!",
];

const reactions = [
  "You are so right!",
  "No I disgree with this",
  "Im glad I have people who share the same thoughts",
  "Im tired",
  "No that is just what the goverment wants you to think",
  "The Owl House is a great show",
  "I miss you!",
  "Apple is overrated",
  "I love you!",
  "You are my hero for saying this!",
  "I just can't be in the same room as you!",
  "There he is officer, arrest him",
  "I wish toh wasn't going to get canceled",
  "Luz honestly deserves better!",
  "You are so smart for saying this!",
  "I wish I thought of that first",
  "Man am I tired writing this",
];

//gets random item from Array
const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const buildRandomUser = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      username: userNames[i],
      email: emails[i],
    });
  }
  return results;
};

//Generates Random thoughts with Random Reactions
const getRandomThought = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      thoughtText: getRandomItem(thoughts),
      username: getRandomItem(userNames),
      reactions: [...getReactions(3)],
    });
  }
  return results;
};

const getReactions = (int) => {
  if (int === 1) {
    return getRandomItem(reactions);
  }
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      reactionBody: getRandomItem(reactions),
      username: getRandomItem(userNames),
    });
  }
  return results;
};

module.exports = { buildRandomUser, getRandomThought };
