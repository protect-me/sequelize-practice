# sequelize crud

## 구조 : MVC 패턴
Models / Controllers / View(template)

## CRUD
create / read / update / delete [CRUD]
insert / select / update /delete [SQL Query]
create / findAll, findByPk, findOne / update / destroy [Sequelize]

models.테이블명.create(데이터)
models.테이블명.findAll(조회조건)
models.테이블명.findByPk(primary key)
models.테이블명.findOne(조회조건)
models.테이블명.update(데이터, 조회조건)
models.테이블명.destroy(조회조건)



## req
1. req.params
예를 들어 /user/:name 경로가 있으면 "name"속성을 req.params.name으로 사용 https://params/user/12341234 일 경우 12341234를 받는다. 

2. req.body
JSON 등의 데이터를 담을때 사용(주로 POST로 보냈을 때)
요청 본문에 제출 된 키-값 데이터 쌍을 포함한다. 기본적으로 이는 정의되어 있지 않으며 express.json(), express.urlencoded()와 같은 미들웨어를 사용해야함
즉, req.body는 body-parser를 사용하기 전에는 default 값으로 Undefined 설정되기 때문에 body-parser를 사용해야만 함

> 출처 : https://studyingych.tistory.com/34