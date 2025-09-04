from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/', methods=['GET'])
def home():
   return "Backend is running!"

@app.route("/api/orders", methods=['POST'])
def create_order():
    print("DEBUG raw body:", request.data)      # raw bytes
    print("DEBUG content-type:", request.headers.get("Content-Type"))
    
    try:
        data = request.get_json(force=True)     # force parsing, skip auto error
    except Exception as e:
        print("DEBUG JSON parse error:", e)
        return {"error": "Invalid JSON"}, 400

    print("DEBUG parsed JSON:", data)
    return jsonify({"message": "Order received", "order": data}), 201


if __name__ == '__main__':
      app.run(debug=True)