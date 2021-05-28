const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ p1_text: "p1의 텍스트" });
  }, 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ p2_text: "p2의 텍스트" });
  }, 3000);
});

// Promise Chaining
p1.then((result1) => {
  console.log("p1 : ", result1.p1_text);
  return p2;
}).then((result2) => {
  console.log("p2 : ", result2.p2_text);
});
// 1초 후 p1 console을 찍기
// p2를 리턴 >> 3초 후 p2 console 찍기

// Promise All
Promise.all([p1, p2])
  .then((result) => {
    console.log("p1 : ", result[0].p1_text);
    console.log("p2 : ", result[1].p2_text);
    // 내부에서는 p1 과 p2는 비동기
    // Promise.all의 최종 끝나는 시간은 보장이 됨

    // 에러 발생 시 분기
    reject("error 발생");
  })
  .catch((err) => {
    console.log(err);
  });
