
-------------------------------create dataBase----------------------------------------------------
create database testdb
use testdb

--------------------------------create table purchase----------------------------------------


create table tblpurchase(ItemId int not null, Name varchar(25),ItemQty int)

select * from tblpurchase

------------------------------------add value to table purchase-------------------------------------------------
insert into  tblpurchase values(2,'Ac',13)
insert into  tblpurchase values(1,'TV',20)
insert into  tblpurchase values(3,'fan',24)
insert into  tblpurchase values(4,'radio',33)

------------------------------------make coloumn ItemId Primary----------------------------------------------------

alter table tblpurchase add constraint pk primary key(ItemId)
h 
--------------------------------create  table sales-------------------------------------------------

create table tblsales (ItemId int constraint fk foreign key references tblpurchase (ItemId),sale_price int, reamainQty int) 

alter table tblsales  alter column sale_price float 


select * from tblsales


truncate table tblsales

--------------------------------add value to tblsales--------------------------------------

insert into tblsales values (2,'200.78',20 )
insert into tblsales values (3,'250.71',4 )
insert into tblsales values (2,'180.58',20 )

select * from tblinfo
