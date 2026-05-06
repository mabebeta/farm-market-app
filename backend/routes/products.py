#---------------------------------------------------------------------------------------
# Name:        products.py
# Purpose:
# Author:      Chelo
# Created:     17/04/2026
# Copyright:   (c) Chelo 2026
#---------------------------------------------------------------------------------------

from flask import Blueprint, jsonify, request
from db import get_db

products_bp = Blueprint("products", __name__)

@products_bp.route("/")
def get_products():
    conn = get_db()
    products = conn.execute("SELECT * FROM products").fetchall()
    conn.close()

    return jsonify([dict(p) for p in products])

@products_bp.route("/", methods=["POST"])
def add_product():
    data= request.json 

    name= data.get("name")
    category= data.get("category")
    description= data.get("description")

    conn= get_db()
    cur= conn.cursor()

    cur.execute("""
        INSERT INTO products (name, category, description, image_url)
        VALUES (?,?,?,?)
        """, (name, category, description, ""))

    conn.commit()
    conn.close()

    return jsonify({"message": "Product added successfully"})

@products_bp.route("/<int:product_id>", methods=["DELETE"])
def delete_product(product_id):
    is_admin = False

    if not is_admin:
        return jsonify({"error": "Unauthorized"}), 403
        
    conn= get_db()
    cur= conn.cursor()

    cur.execute("DELETE FROM products WHERE id = ?", (product_id,))

    conn.commit()
    conn.close()

    return jsonify({"message": "Product deleted successfully"})

