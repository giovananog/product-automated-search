from flask import Flask, jsonify
from flask_cors import CORS
from functions import getProductsSearch

app = Flask(__name__)
CORS(app)  # Adiciona o middleware CORS ao aplicativo

@app.route('/')
def default_route():
    return jsonify({'results': []})

@app.route('/<string:product>')
def getProducts(product):
    data = getProductsSearch(product)
    return jsonify({'results': data})

if __name__ == '__main__':
    app.run(debug=True)
