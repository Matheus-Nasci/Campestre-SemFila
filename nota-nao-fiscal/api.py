from flask import Flask, jsonify, request
from escpos.printer import Usb
from main import imprimir_cupom_fiscal

app = Flask(__name__)
printer = Usb(0x28e9, 0x0289, 0, 0x81, 0x03)

# Rota para retornar um JSON
@app.route('/api/json', methods=['GET'])
def get_json():
    data = {
        'message': 'Olá, mundo!',
        'status': 'success'
    }
    return jsonify(data)

# Rota para receber dados via POST
@app.route('/api/nota-nao-fiscal', methods=['POST'])
def post_data():
    data = request.get_json()
    print(data)
    try:
        imprimir_cupom_fiscal(data)
        return jsonify({'message': 'Nota nao fiscal imprimida com sucesso'})
    except Exception as e:
        raise Exception('Erro interno do servidor') from e

if __name__ == '__main__':
    app.run(debug=True, threaded=True)
