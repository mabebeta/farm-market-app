#---------------------------------------------------------------------------------------
# Name:        db.py
# Purpose:
# Author:      Chelo
# Created:     17/04/2026
# Copyright:   (c) Chelo 2026
#---------------------------------------------------------------------------------------

import sqlite3

def get_db():
    conn = sqlite3.connect("database.db")
    conn.row_factory = sqlite3.Row
    return conn