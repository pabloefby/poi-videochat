create database db_poi;

use db_poi;

create table usuarios(
usuario varchar(20) primary key,
nombre varchar(50) not null,
email varchar(30) not null,
contraseña varchar(20) not null,
foto mediumblob 
);

/*select * from usuarios;*/
