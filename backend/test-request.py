import requests

#api url
url = "http://127.0.0.1:5000/api/orders"

#test request values
order = {
      "drink": "latte",
      "milk": "oat",
      "flavor": "vanilla"
}

response = requests.post(url, json=order)

print("Status Code:", response.status_code)
print("Response JSON:", response.json())