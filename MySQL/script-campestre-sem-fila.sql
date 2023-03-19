create database campestresemfila;

use campestresemfila;

create table produto(
	idProduto int primary key auto_increment,
    nome varchar(45),
    valor double,
    tamanho varchar(45)
);

create table pedido(
	numeroFicha int primary key auto_increment,
    nomeCliente varchar(45),
    dataHoraPedido DATETIME,
    recebido boolean,
    fkProduto int,
	foreign key (fkProduto) references produto
);
