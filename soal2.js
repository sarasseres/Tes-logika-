const ex = 'Kemarin Shopia per[gi ke mall.';
const a = 'Saat meng*ecat tembok, Agung dib_antu oleh Raihan.';
const b = 'Berapa u(mur minimal[ untuk !mengurus ktp?';
const c = 'Masing-masing anak mendap(atkan uang jajan ya=ng be&rbeda.';

const validWord = (str) => {
  let result = 0;
  const wordsArr = str.split(' ');
  wordsArr.map((item) => {
    if (!/[^a-zA-Z\-\.\,\?]/i.test(item)) result += 1;
  });
  return result;
};

console.log('Result EX', validWord(ex));
console.log('Result A', validWord(a));
console.log('Result B', validWord(b));
console.log('Result C', validWord(c));
