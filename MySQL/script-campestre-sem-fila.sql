create database campestresemfila;

use campestresemfila;

create table produto(
	idProduto int primary key auto_increment,
    nome varchar(45),
    valor double,
    tamanho varchar(45)
);

create table pedido(
	idPedido int primary key auto_increment,
    nomeCliente varchar(45),
    numeroFicha double,
    fkProduto int,
	foreign key (fkProduto) references produto
);