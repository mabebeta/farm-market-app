#---------------------------------------------------------------------------------------
# Name:        app.py
# Purpose:
# Author:      Chelo
# Created:     17/04/2026
# Copyright:   (c) Chelo 2026
#---------------------------------------------------------------------------------------

from flask import Flask
from flask_cors import CORS
from routes.products import products_bp

app = Flask(__name__)
CORS(app)

app.register_blueprint(products_bp, url_prefix="/api/products")

@app.route("/")
def home():
    return {"message": "Farm Market API is running"}

if __name__ == "__main__":
    app.run(debug=True)

