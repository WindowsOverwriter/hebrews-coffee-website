import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from sqlalchemy import create_engine, text

load_dotenv()
DATABASE_URL = os.getenv("DATABASE_URL")

app = Flask(__name__)
CORS(app, origins=["http://localhost:5173"])  # Enable CORS for all routes

engine = create_engine(DATABASE_URL)

@app.route('/', methods=['GET'])
def home():
   return "Backend is running and connected to database!"

@app.route("/api/orders", methods=['GET'])
def get_orders():
    try:
        with engine.connect() as conn:
            result = conn.execute(text("SELECT * FROM hebrews_coffee_orders"))
            orders = [dict(row._mapping) for row in result]
        return jsonify(orders)
    except Exception as e:
        print("Database error:", e)
        return jsonify({"error": "Failed to fetch orders"}), 500


@app.route("/api/orders", methods=['POST'])
def create_order():
    data = request.get_json(force=True)

    # Example expected JSON:
    # {
    #   "name": "John Doe",
    #   "phone": "8058675309",
    #   "drink": "latte",
    #   "temperature": "hot",
    #   "espresso": "regular-espresso",
    #   "milk": "half-and-half",
    #   "flavor": "vanilla",
    #   "time_slot": "10:00 AM"
    # }

    print("=== Incoming order JSON ===")
    print(data)
    print("===========================")

    try:
        with engine.connect() as conn:
            query = text("""
                        INSERT INTO hebrews_coffee_orders (name, phone, drink, temperature, espresso, milk, flavor, time_slot)
                        VALUES (:name, :phone, :drink, :temperature, :espresso, :milk, :flavor, :time_slot)
            """)
            result = conn.execute(query, data)
            conn.commit()
            print(f"✅ Order inserted successfully. Rows affected: {result.rowcount}\n")
            return jsonify(data), 201
    except Exception as e:
        print("Database error: ", e)
        return jsonify({"error": "Failed to save order"}), 500

if __name__ == '__main__':
      app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)), debug=True)