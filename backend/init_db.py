#---------------------------------------------------------------------------------------
# Name:        init_db.py
# Purpose:
# Author:      Chelo
# Created:     17/04/2026
# Copyright:   (c) Chelo 2026
#---------------------------------------------------------------------------------------

import sqlite3

conn = sqlite3.connect("database.db")
cur = conn.cursor()

cur.execute("""
    CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        category TEXT,
        description TEXT,
        image_url TEXT
    )
    """)

# ADD SAMPLE DATA
cur.executemany("""
    INSERT INTO products (name, category, description, image_url)
    VALUES (?,?,?,?)
""", [
    ("Raw Honey", "honey", "Natural honey straight from our farm.", ""),
    ("Fresh Coffee", "coffee", "High-quality farm-grown coffee.", ""),
    ("Hass Avocados", "avocados", "Fresh organic avocados.", "")
])

conn.commit()
conn.close()

print("Database created")

