SELECT
  p.nome AS nome_produto,
  MAX(p.valor) AS preco_produto,
  COUNT(v.produto_id) AS total_pedidos,
  SUM(p.valor) AS total_vendas
FROM
  campestre_sem_fila.produto p
JOIN
  campestre_sem_fila.pedido v ON p.id = v.produto_id
GROUP BY
  p.nome;

SELECT
  COUNT(v.produto_id) AS total_pedidos,
  SUM(p.valor) AS total_vendas
FROM
  campestre_sem_fila.produto p
JOIN
  campestre_sem_fila.pedido v ON p.id = v.produto_id;
