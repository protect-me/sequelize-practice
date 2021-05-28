# sequelize crud

구조 : MVC 패턴
Models / Controllers / View(template)

create / read / update / delete [CRUD]
insert / select / update /delete [SQL Query]
create / findAll, findByPk, findOne / update / destroy [Sequelize]

models.테이블명.create(데이터)
models.테이블명.findAll(조회조건)
models.테이블명.findByPk(primary key)
models.테이블명.findOne(조회조건)
models.테이블명.update(데이터, 조회조건)
models.테이블명.destroy(조회조건)

