drop database if exists todolist;

create database if not exists todolist;

use todolist;

drop table if exists user;

create table if not exists user(
   userId integer not null primary key auto_increment,
   username varchar(100) unique,
   password varchar(100)
)engine=innodb;

create table if not exists task(
   taskId integer primary key auto_increment,
   userTask integer not null,
   taskText varchar(100) unique,
   completed tinyint(1),
   constraint fk_user foreign key (userTask) references user(userId) on delete cascade
)engine=innodb;
