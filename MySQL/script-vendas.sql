SELECT pedido.id, pedido.data_hora_pedido, pedido.nome_cliente, pedido.numero_ficha, pedido.status_pedido, pedido.produto_id, produto.nome, produto.valor, produto.tamanho
FROM pedido
INNER JOIN produto
ON pedido.produto_id = produto.id;
