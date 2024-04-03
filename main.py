from flask import Flask, request, render_template

app = Flask(__name__)

host = "255.255.255.255"
port = 4200

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/es1")
def esercizio1():
    try:
        print("es1")
        return "suceed"
    except:
        return "failed"
    
@app.route("/es2")
def esercizio2():
    try:
        print("es2")
        return "suceed"
    except:
        return "failed"

@app.route("/es3")
def esercizio3():
    try:
        args = request.args
        led = args.get("led")
        tempo = args.get("tempo")
        volte = args.get("volte")
        print(led,tempo,volte)
        return "suceed"
    except:
        return "failed"

@app.route("/es4")
def esercizio4():
    try:
        args = request.args
        verso=args.get("verso")
        print(verso)
        return "succed"
    except:
        return "failed"
    

@app.route("/es5")
def esercizio5():
    try:
        args = request.args
        verde = args.get("verde")
        rosso = args.get("rosso")
        print(verde, rosso)
        return "succed"
    except:
        return "failed"
    

@app.route("/es6")
def esercizio6():
    try:
        args = request.args
        verde = args.get("verde")
        rosso = args.get("rosso")
        print(verde, rosso)
        return "succed"
    except:
        return "failed"
    

@app.route("/es7")
def esercizio7():
    try:
        args = request.args
        num = args.get("num")
        print(num)
        return "suceed"
    except:
        return "failed"

@app.route("/es8")
def esercizio8():
    try:
        args = request.args
        num = args.get("num")
        print(num)
        return "succed"
    except:
        return "failed"


@app.route("/es9")
def esercizio9():
    try:
        args = request.args
        testo = args.get("testo")
        print(testo)
        return "succed"
    except:
        return "failed"
    

if __name__ == "__main__":
    app.run(debug=True,host=host,port=port)