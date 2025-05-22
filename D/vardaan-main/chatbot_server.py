from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

qa_pairs = {
    "hello":"Hi, how can I help you?",
    "hi":"Hello, how can I help you?",
    "thank you":"Your Welcome.Donate blood save life!",
    "who can donate blood": "Generally, healthy individuals over 18 years and above 50kg can donate blood.",
    "how often can i donate": "You can donate whole blood every 56 days (8 weeks).",
    "is blood donation safe": "Yes, blood donation is a safe process. New sterile equipment is used each time.",
    "how long does it take": "The actual blood donation takes about 8-10 minutes.",
    "do i need to fast": "No, you don’t need to fast. Eat a healthy meal before donating.",
    "will it hurt": "You may feel a quick pinch, but it’s not painful.",
    "can i donate with tattoos": "Yes, if it has been more than 6 months since your tattoo.",
    "what should i do after donation": "Rest, drink fluids, and avoid heavy exercise for 24 hours.",
    "what blood types are needed": "All blood types are needed. O-negative is especially in demand.",
    "what if i feel dizzy": "Lie down and elevate your legs. Inform the staff immediately.",
    "can i donate during periods": "Yes, if you feel healthy and meet all other requirements.",
    "can diabetics donate blood": "Yes, if diabetes is under control and you’re otherwise healthy.",
    "is there any payment": "No, blood donation is voluntary and unpaid.",
    "how much blood is taken": "About 350-450 ml depending on your weight.",
    "what is universal donor": "O-negative blood is called the universal donor because it can be given to anyone in emergencies.",
    "what is universal recipient": "AB-positive is the universal recipient as they can receive blood from all groups.",
    "can o positive donate to a positive": "Yes, O+ can donate to A+, B+, AB+, and O+.",
    "can i donate if i had covid": "Yes, after 14 days of recovery and being symptom-free.",
    "what blood type is rarest": "AB-negative is the rarest blood type.",
    "can b negative donate to b positive": "No, negative cannot donate to positive, but B+ can donate to B+ and AB+.",
    "is my blood type inherited": "Yes, your blood type is inherited from your parents.",
    "can different blood types mix": "No, incompatible blood types can cause severe reactions.",
    "what is rh factor": "Rh factor is a protein on red blood cells. It determines if your blood type is positive or negative.",
    "can i donate if i’m anemic": "No, if you're anemic or have low hemoglobin, you should not donate blood.",
    "how do i prepare": "Eat a meal, drink water, avoid alcohol, and sleep well."
}

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    message = data.get("message", "").lower()

    for question, answer in qa_pairs.items():
        if question in message:
            return jsonify({"reply": answer})

    return jsonify({"reply": "Sorry, I don’t know the answer to that yet."})

if __name__ == "__main__":
    app.run(port=5000)


