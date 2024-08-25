from flask import Flask, request, jsonify

app = Flask(__name__)
@app.route('/api/data', methods=['GET', 'POST'])
def handle_data():
    if request.method == 'POST':
        data = request.get_json()
        

        user_id = data.get('user_id')
        college_email = data.get('college_email')
        college_roll_number = data.get('college_roll_number')
        numbers = data.get('numbers', [])
        alphabets = data.get('alphabets', [])

        highest_lowercase = []
        if alphabets:
            highest_char = max([char for char in alphabets if char.islower()], default=None)
            if highest_char:
                highest_lowercase = [highest_char]

        response = {
            "status": "success",
            "user_id": user_id,
            "college_email_id": college_email,
            "college_roll_number": college_roll_number,
            "array_for_numbers": numbers,
            "array_for_alphabets": alphabets,
            "array_with_highest_lowercase_alphabet": highest_lowercase
        }
        return jsonify(response), 200

    elif request.method == 'GET':
        return jsonify({"operation_code": "API_GET_001"}), 200

if __name__ == '__main__':
    app.run(debug=True)
