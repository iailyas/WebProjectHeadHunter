DROP TABLE IF EXISTS working_place CASCADE;
DROP TABLE IF EXISTS portfolio CASCADE;
DROP TABLE IF EXISTS requests CASCADE;
DROP TABLE IF EXISTS company CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS user_info CASCADE;
DROP TABLE IF EXISTS summary CASCADE;
DROP TABLE IF EXISTS vacancies CASCADE;
DROP TABLE IF EXISTS review CASCADE;

CREATE TABLE users
(
    id             SERIAL                NOT NULL PRIMARY KEY,
    login          CHARACTER VARYING(30),
    password       CHARACTER VARYING(30),
    role           int
);
CREATE TABLE company
(
    id             SERIAL                NOT NULL PRIMARY KEY,
    name           CHARACTER VARYING(30),
    phone          CHARACTER VARYING(30),
    address        CHARACTER VARYING(30),
    manager_id     int,
    description    CHARACTER VARYING(30)
);	 
CREATE TABLE vacancies
(
    id              SERIAL               NOT NULL PRIMARY KEY,
    salary          int,
    company_id      int,
    contacts        CHARACTER VARYING(30),
    requirements    CHARACTER VARYING(30),
    conditions      CHARACTER VARYING(30)
);	
CREATE TABLE summary
(
    id              SERIAL               NOT NULL PRIMARY KEY,
    offer           CHARACTER VARYING(30),
    user_id         int,
    salary          int,
    vacancy_id      int
);	
CREATE TABLE user_info
(
    id              SERIAL               NOT NULL PRIMARY KEY,
    avatar          CHARACTER VARYING(30),
    phone           CHARACTER VARYING(30),
    email           CHARACTER VARYING(254),
	projects        CHARACTER VARYING(30)
);	
CREATE TABLE review
(
    id              SERIAL               NOT NULL PRIMARY KEY,
    company_id      int,
    comment         CHARACTER VARYING(30),
    user_id         int,
    rate            int,
    date            date
);
CREATE TABLE requests
(
    id             SERIAL                NOT NULL PRIMARY KEY,
    company_id     int,
    portfolio_id   int,
    desccription   CHARACTER VARYING(30)
);	
CREATE TABLE portfolio
(
    id              SERIAL               NOT NULL PRIMARY KEY,
    user_id         int,
    skills          CHARACTER VARYING(30),
    wishes          CHARACTER VARYING(30)
);
CREATE TABLE working_place
(
    id              SERIAL               NOT NULL PRIMARY KEY,
    portfolio_id    int,
    name            CHARACTER VARYING(30),
    position        CHARACTER VARYING(30),
    start_date      date,
    end_date        date
);
--1
ALTER TABLE review
ADD CONSTRAINT FK_users_review_id_user_id
FOREIGN KEY (user_id) REFERENCES users(id)
ON DELETE CASCADE
ON UPDATE CASCADE;
--2
ALTER TABLE company
ADD CONSTRAINT FK_users_company_manager_id_id
FOREIGN KEY (manager_id) REFERENCES users(id)
ON DELETE CASCADE
ON UPDATE CASCADE;
--3
ALTER TABLE review
ADD CONSTRAINT FK_company_review_user_id_id
FOREIGN KEY (company_id) REFERENCES company(id)
ON DELETE CASCADE
ON UPDATE CASCADE;
--4
ALTER TABLE user_info
ADD CONSTRAINT FK_users_user_info_id_id
FOREIGN KEY (id) REFERENCES users(id)
ON DELETE CASCADE
ON UPDATE CASCADE;
--5
ALTER TABLE vacancies
ADD CONSTRAINT FK_vacancies_company_company_id_id
FOREIGN KEY (company_id) REFERENCES company(id)
ON DELETE CASCADE
ON UPDATE CASCADE;
--6
ALTER TABLE summary
ADD CONSTRAINT FK_summary_vacancies_id_vacancy_id
FOREIGN KEY (vacancy_id) REFERENCES vacancies(id)
ON DELETE CASCADE
ON UPDATE CASCADE;
--7
ALTER TABLE summary
ADD CONSTRAINT FK_summary_users_user_id_id
FOREIGN KEY (user_id) REFERENCES users(id)
ON DELETE CASCADE
ON UPDATE CASCADE;
--8
ALTER TABLE user_info
ADD CONSTRAINT FK_users_info_summary_id_id
FOREIGN KEY (id) REFERENCES summary(id)
ON DELETE CASCADE
ON UPDATE CASCADE;
--9
ALTER TABLE requests
ADD CONSTRAINT FK_requests_company_company_id_id
FOREIGN KEY (company_id) REFERENCES company(id)
ON DELETE CASCADE
ON UPDATE CASCADE;
--10
ALTER TABLE requests
ADD CONSTRAINT FK_portfolio_requests_portfolio_id_id
FOREIGN KEY (portfolio_id) REFERENCES portfolio(id)
ON DELETE CASCADE
ON UPDATE CASCADE;
--11
ALTER TABLE portfolio
ADD CONSTRAINT FK_portfolio_users_user_id_id
FOREIGN KEY (user_id) REFERENCES users(id)
ON DELETE CASCADE
ON UPDATE CASCADE;
--12
ALTER TABLE working_place
ADD CONSTRAINT FK_working_place_portfolio_portfolio_id_id
FOREIGN KEY (portfolio_id) REFERENCES portfolio(id)
ON DELETE CASCADE
ON UPDATE CASCADE;

INSERT INTO users
VALUES
(1,'user','123',0),
(2,'ilyas','asas',0),
(3,'admin','ighQmnOqL',1),
(4,'nikita kulakov','ianikita',0),
(5,'dmitry','dsklk5',0);





INSERT INTO portfolio
VALUES
(1,1,'C++ C# Java','a lot of money'),
(2,2,'linux director','career'),
(3,3,'Java','fun'),
(4,4,'Html/css','collective'),
(5,5,'ASP.net waitress','communication');
INSERT INTO working_place
VALUES
(1,1,'enokentiy','loader','1999-01-08','2020-01-09'),
(2,2,'ilya','director','2021-09-30','2021-10-1'),
(3,3,'bob','secretary','2017-08-17','2018-06-10'),
(4,4,'dominik','manager','2013-01-11','2020-06-10'),
(5,5,'frank','waitress','2018-06-01','2018-06-10');
INSERT INTO company
VALUES
(1,'EPAM',8800553535,'ul. Tirazhnaya 150 Minsk',1,'good company'),
(2,'IBA Group',9678,'ul.Yakuba_Kolasa 1 Minsk',1,'good company'),
(3,'iTechArt Group',70100,'ul. Tolstogo 10 Minsk',1,'good company'),
(4,'ISsoft',123455,'ul Chapayeva 5 Minsk',1,'good company'),
(5,'BelitSoft',99999,'pereulok Kozlova 7 Minsk',1,'good company');
INSERT INTO requests
VALUES
(1,1,1,'strong character'),
(2,2,2,'professional experience'),
(3,3,3,'achievets'),
(4,4,4,'goals'),
(5,5,5,'Self motivation');
INSERT INTO vacancies
VALUES
(1,1500,1,'8800553535','HTTP_HTML/CSS','full-time'),
(2,100,2,'9678','C++ B1 css js','part_time'),
(3,2000,3,'70100','NET html js','part-time'),
(4,1000,4,'123455','kotlin','full-time'),
(5,700,5,'99999','Java oop bd','part-time');

INSERT INTO summary
VALUES
(1,'Java web developer',1,1500,1),
(2,'C++ junior',2,100,2),
(3,'C# middle',3,2500,3),
(4,'Kotlin senior',4,4000,4),
(5,'Java middle',5,2700,5);
INSERT INTO user_info
VALUES
(1,1,'+375295073053','ex@ex.by'),
(2,2,'+375291521372','kuzmenkov@gmail.com'),
(3,3,'+375445138851','bobpalkin@gmail.com'),
(4,4,'+375298708780','dominiktoreto@yandex.ru'),
(5,5,'+375336229371','saliery@mail.ru');





INSERT INTO review
VALUES
(1,1,'good communication',1,13,'30-09-2021'),
(2,2,'best portfolio',2,23,'01-10-2021'),
(3,3,'hardworking',3,10,'20-08-2021'),
(4,4,'professional',4,1,'28-09-2021'),
(5,5,'responsoble person',5,1,'10-09-2021');


