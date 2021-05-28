// 콜백 지옥 (Callback Hell)
exports.get_products_detail = (req, res) => {
  models.Products.findByPk(req.params.id).then((product) => {
    models.Products2.findByPk(req.params.id).then((product) => {
      models.Products3.findByPk(req.params.id).then((product) => {
        if (true) {
          models.Products4.findByPk(req.params.id).then((product) => {});
        } else {
          models.Products5.findByPk(req.params.id).then((product) => {});
        }
        res.render("admin/detail.html", { product });
      });
    });
  });
};

// promise
// 1. resolve 와 reject를 인자로 가지는 함수를 만든다.
// 2. 내가 원하는 시점을 resolve로 받아온다.

// 1. promise 기본 함수
const aaa = new Promise(function (resolve, reject) {});

// 2. promise 화살표함수 + 순서 console 찍어보기
const bbb = new Promise((resolve, reject) => {
  resolve(conosl.elog("프로미스 이행!"));
});

bbb.then(() => {
  console.log("프로미스 실행 완료!");
});

// 3. promise 데이터 보내기
const ccc = new Promise((resolve, reject) => {
  resolve("promise 123 data");
});

ccc.then((result) => {
  console.log(result);
});

// 4. setTimeout
const wait1seconds = new Promise((resolve, reject) => {
  console.log("1. 시작");
  setTimeout(() => {
    resolve("2. (1초 뒤) setTimeout");
  }, 1000);
});

wait1seconds.then((result) => {
  console.log("3. 프로미스 이행 완료");
});

// 5. reject로 error 처리
const ddd = new Promise((resolve, reject) => {
  // if (true) {
  //   resolve(console.log("정상처리"));
  // } else {
  reject("에러!");
  // }
});

ddd
  .then(() => {
    console.log("프로미스 이행완료");
  })
  .catch((err) => {
    console.log(err);
  });
