// BEGIN
const getMutualFriends = (user1, user2) => {
  let friends1 = user1.getFriends();
  let friends2 = user2.getFriends();

  const idsOfB = new Set(friends2.map(friend => friend.id));
  return friends1.filter(friend => idsOfB.has(friend.id));
};
export { getMutualFriends };
// END

export default ({ id = null, friends = [] } = {}) => ({
  friends,
  id,
  getFriends() {
    return this.friends.slice(); // возвращение копии массива, чтобы его не изменили извне
  },
});