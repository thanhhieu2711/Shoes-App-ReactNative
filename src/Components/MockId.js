export default function MockId() {
  const string = 'qwertyuiopasdfghjklzxcvbnm123456789';
  let id = '';
  for (let i = 0; i < 10; i++) {
    let rdCharacter = string[Math.floor(Math.random() * string.length)];
    if (i % 4 === 0 && i !== 0) {
      id += `-${rdCharacter}`;
    } else {
      id += rdCharacter;
    }
  }

  return id;
}
