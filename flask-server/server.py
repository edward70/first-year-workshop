from flask import Flask, request, jsonify
import pymongo
from flask_cors import CORS
from bson import json_util
import json

app = Flask(__name__)
CORS(app)

client = pymongo.MongoClient("mongodb+srv://user:pass@cluster0.fome7fi.mongodb.net/?retryWrites=true&w=majority")
db = client.get_database("recipe-database")
recipe_collection = pymongo.collection.Collection(db, "recipes")

def add_recipe(name, ingredients, method):
    recipe = {"name": name, "ingredients": ingredients, "method": method}
    return recipe_collection.insert_one(recipe)

@app.route('/addrecipe', methods=['POST'])
def api_post_recipe():
    try:

        # data = request.data
        # recipe = json.dumps(data.decode("utf-8"))
        # print(recipe)
        # add_recipe(recipe["name"], recipe["ingredients"], recipe["method"])
        # add_recipe(request.form.get('name'), request.form.get('ingredients'), request.form.get('method'))
        data = request.data
        data = data.decode("utf-8")
        recipe = json.loads(data)
        add_recipe(recipe["name"], recipe["ingredients"], recipe["method"])
        return jsonify({'Success': "Yay"})
    except Exception as e:
        return jsonify({'error': str(e)}), 400

@app.route('/listrecipes', methods=['GET'])
def api_get_recipe():
    try:
        recipe_data = recipe_collection.find()
        return json_util.dumps(recipe_data)
    except Exception as e:
        return jsonify({'error': str(e)}), 400
    
@app.route('/deleterecipe', methods=['POST'])
def api_post_deleterecipe():
    try:
        # data = request.data
        # data = data.decode("utf-8")
        # recipe = json.loads(data)
       
        # recipe_collection.delete_one({'name': recipe["name"]})
        recipe_collection.delete_one({'name': request.form.get('name')})
        return jsonify({'Success': "Yay"})
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == "__main__":
    app.run(debug=True, port=8000)