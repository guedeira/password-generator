from flask import Flask, request, jsonify
from flask_cors import CORS
import random
import string
import logging

app = Flask(__name__)
CORS(app)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.StreamHandler(),
        logging.FileHandler('backend/app.log', mode='a')
    ]
)

def generate_password(lenght, use_uppercase, use_numbers, use_special_chars):
    characters = string.ascii_lowercase

    if use_uppercase:
        characters += string.ascii_uppercase

    if use_numbers:
        characters += string.digits

    if use_special_chars:
        characters += '!@#$%¨&*(){}+-_='

    password = ''.join(random.choices(characters, k=lenght))
    return password

@app.route('/generate-password', methods=['POST'])
def generate_password_endpoint():
    try:
        data = request.get_json()
        length = data.get('length', 8)
        use_uppercase = data.get('use_uppercase', False)
        use_numbers = data.get('use_numbers', False)
        use_special_chars = data.get('use_special_chars', False)

        if not isinstance(length, int) or not (8 <= length <= 64):
            return jsonify({'erro': 'O comprimento da senha deve estar entre 8 e 64 caracteres.'}), 400
        
        password = generate_password(length, use_uppercase, use_numbers, use_special_chars)
        logging.info(f'Senha aleatória com {length} foi gerada.')
        return jsonify({'password': password})
    
    except Exception as e:
        return jsonify({'erro': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
