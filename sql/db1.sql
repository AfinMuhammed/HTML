show databases;
create table Employees (emp_id int,emp_name varchar(15),job_name varchar(20),manager_id int,hire_date date,salary decimal(10,2),commission decimal(7,2),dep_id int);
create table Departments(dep_id int,dep_name varchar(20),dep_location varchar(15));
create table salary_grade(grade int,min_salary int,max_salary int);
show tables from db1;
insert into employees(emp_id,emp_name,job_name,hire_date,salary,dep_id) values(68319,"KAYLING","PRESIDENT","1991-11-18",6000.00,1001);
select * from employees;
insert into employees values(68319,"KAYLING","PRESIDENT",NULL,"1991-11-18",6000.00,null,1001);
drop table employees;
create table Employees (emp_id int PRIMARY KEY,emp_name varchar(15),job_name varchar(20),manager_id int,hire_date date,salary decimal(10,2),commission decimal(7,2),dep_id int);
insert into employees values(66928,"BLAZE","MANAGER",68319,"1991-05-01",2750.00,null,3001);
insert into employees values(67832,"CLARE","MANAGER",68319,"1991-05-01",2750.00,null,3001);
insert into employees values(65646,"JONAS","MANAGER",68319,"1991-05-01",2750.00,null,3001);
insert into employees values(67858,"SCARLET","ANALYST",65646,"1991-06-09",2750.00,null,3001);
insert into employees values(69062,"FRANK","ANALYST",65646,"1991-04-02",2750.00,null,3001);
insert into employees values(63679,"SANDRINE","CLERK",69062,"1997-04-19",2750.00,null,3001);
insert into employees values(64989,"ADELYNE","SALESMAN",66928,"1991-02-20",2750.00,null,3001);
insert into employees values(65271,"WADE","SALESMAN",66928,"1991-02-21",2750.00,null,3001);
insert into employees values(66564,"MADDEN","SALESMAN",66928,"1991-09-28",2750.00,null,3001);
insert into employees values(68454,"TUCKER","SALESMAN",66928,"1991-09-08",2750.00,null,3001);
update employees set commission=0 where emp_id=68454;
select salary from employees;
alter table Departments modify dep_id integer primary key;
desc salary_grade;
alter table salary_grade modify grade int Primary key;
select distinct job_name from employees;
SELECT emp_name, salary as sal FROM employees;
select concat(emp_name,'   ',job_name) as "Employee & Job" from employees;
desc employees;
SELECT emp_name, TO_CHAR(hire_date,’month’) FROM employees;
select hire_date from employees;
SELECT emp_name,length(trim(emp_name)) as "LENGTH" FROM employees;
SELECT emp_id,salary,commission from employees;
select distinct dep_id,job_name from employees;
select * from employees where dep_id NOT IN(1001);
select avg(salary) from employees where job_name="analyst";
select salary from employees where job_name="analyst";
SELECT dep_id from employees;
select * from employees where hire_date < "1991-01-01";
update employees set hire_date = "1990-12-18" where emp_id = 63679;
desc employees;
use db1;
alter table employees modify dep_id int foreign Key;
insert into departments values(1001,"Name1","TVM");
truncate departments;
select * from employees;
SELECT * from employees where emp_name = "BLAZE";
select emp_name, concat('$',salary+salary*15/100) as Salary from employees;
select emp_id,emp_name,salary,date_format(hire_date,"%M %e %Y") from employees;
select * from employees where salary+salary*25/100 > 3000;
select * from employees where date_format(hire_date, "%m") = 02;
select emp_id,emp_name,hire_date,salary from employees where hire_date < "1991-04-01";
select * from employees where job_name<>"manager" and job_name <> "president" order by salary ASC;
select * from employees where job_name NOT IN ('manager','president') order by salary ASC;
select max(salary) as MAX from employees;
select job_name, avg(salary),avg(salary+commission) from employees group by job_name;
select * from employees;
select * from departments;
DESC departments;
insert into departments values(1001,'FINANCE','SYDNEY');
insert into departments values(2001,'AUDIT','MELBOURNE');
insert into departments values(3001,'MARKETING','PERTH');
insert into departments values(4001,'PRODUCTION','BRISBANE');
SELECT employees.emp_id,departments.dep_id,departments.dep_location,departments.dep_name from employees,departments where employees.dep_id in (1001,2001);
select manager_id,count(manager_id) as  count from employees group by manager_id order by manager_id;
select dep_id,count(dep_id) from employees group by dep_id having count(dep_id) > 2;
select * from employees where emp_name like '%ar%';
