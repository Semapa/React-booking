function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function generateUserData() {
  return {
    image: `https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
      .toString(36)
      .substring(7)}.svg`
  }
}

function generateRoomData() {
  return {
    rating: getRandomInt(1, 5),
    reservation: false
  }
}

module.exports = { generateUserData, generateRoomData }
