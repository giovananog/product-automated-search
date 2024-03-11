from flask import Flask, jsonify
from functions import test_scraping

app = Flask(__name__)

@app.route('/')
def default_route():
    test_scraping()
    return jsonify({'results': []})


if __name__ == '__main__':
    app.run(debug=True)
