#---------------------------------------------------------------------------------------
# Name:        products.py
# Purpose:
# Author:      Chelo
# Created:     17/04/2026
# Copyright:   (c) Chelo 2026
#---------------------------------------------------------------------------------------

from flask import Blueprint, jsonify
from db import get_db

products_bp = Blueprint("products", __name__)

@products_bp.route("/")
def get_products():
    conn = get_db()
    products = conn.execute("SELECT * FROM products").fetchall()
    conn.close()

    return jsonify([dict(p) for p in products])

