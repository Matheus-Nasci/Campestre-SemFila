from escpos.printer import Usb


def imprimir_cupom_fiscal(dados):
    printer = Usb(0x28e9, 0x0289, 0, 0x81, 0x03)
    # Definir o tamanho do papel
    printer.set(align='center')
    printer.text('\x1B\x63\x30\x02')  # Definir o tamanho do papel para 80mm (padrão)

    # Imprimir as linhas centrais
    printer.set(align='center', bold=True, custom_size=(2,2))
    printer.text('Clube de Desbravadores Campestre\n\n')
    
    printer.text(f"{formatar_data(dados['dataHoraPedido'])}\n\n")
    printer.text('Rua Professor Nicolau Maria Rossetti, 308 - Vila Imperio, Sao Paulo - SP, 04407-030\n')
    printer.text('\n')

    # Imprimir os dados do pedido
    printer.set(align='left', bold=False)
    printer.text('COD | DESC | QTD | VLR ITEM R$\n')
    printer.text('\n')
    printer.set(align='left', bold=False)

    for detalhe in dados['detalhesPedido']:
        produto = detalhe['produtoResponse']
        printer.text('{} {} '.format(produto['id'], produto['nome']))
        printer.text(f"{detalhe['quantidade']}xUN  R$ {(detalhe['quantidade'] * produto['valor'])}\n")

    printer.text('\n\n')
    printer.set(width=2, height=2, bold=True)
    printer.text('Total R$: {}\n'.format(dados['valorTotal']))
    printer.text('\n')
    printer.set(bold=True, custom_size=(5,5), width=3, height=3)
    printer.text('SENHA: {}\n'.format(dados['numeroFicha']))
    printer.text('\n')

    # Cortar o papel
    printer.cut()

    # Fechar a conexão com a impressora
    printer.close()

def formatar_data(data_hora_pedido):
    data = '{}/{}/{}'.format(data_hora_pedido['date']['day'], data_hora_pedido['date']['month'], data_hora_pedido['date']['year'])
    hora = '{}:{}:{}'.format(data_hora_pedido['time']['hour'], data_hora_pedido['time']['minute'], data_hora_pedido['time']['second'])
    data_hora_formatada = '{} {}'.format(data, hora)
    return data_hora_formatada

