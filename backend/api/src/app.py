from flask import Flask, jsonify
from functions import getProductsSearch

app = Flask(__name__)

@app.route('/')
def default_route():
    return jsonify({'results': []})

@app.route('/search/<string:product>')
def getProducts(product):
    data = getProductsSearch(product)
    return jsonify({'results': data})

if __name__ == '__main__':
    app.run(debug=True)
