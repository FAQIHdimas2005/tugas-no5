// soal no 5
let hasil= kodeUnix.reduce((accumulator: any, currentValue: any) => {
    return accumulator + currentValue;
  });
  
  hasil = Math.floor(hasil / 20);
  
  console.log(hasil);