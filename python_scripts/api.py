from flask import Flask
from flask import request
from train_script import trainingML
from butler_model import butler_menu
from read_time import estimation

app = Flask(__name__)

@app.route("/butler", methods=['GET', 'POST'])
def butler():
    if request.method == 'POST':
        return butler_menu(request.form['text']) 
    else:
        return "Please use POST method to call butler!."

@app.route("/train_butler")
def train_butler():
    return trainingML()

@app.route("/read_time")
def read_time():
    if request.method == 'POST':
        return estimation(request.form['text'],request.form['img_num']) 
    else:
        return "Please use POST method to call read_time!."