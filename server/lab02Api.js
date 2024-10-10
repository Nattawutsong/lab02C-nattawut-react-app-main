import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import admin from "firebase-admin";

import serviceAccount from "_____" assert { type: "json" };
// import serviceAccount from "_____" with { type: "json" };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const app = express();
const port = 3004;

app.use(bodyParser.json());
app.use(cors());
app.listen(port, ()=>{
    console.log(`Web application listening on port ${port}.`);
});

async function addPet(_____){
    const petRef = db.collection('_____').doc();
    const docRef = db.collection('_____').doc(_____);
    let tmpObj = { ...tmpPetData, petId: petRef.id };
    await docRef._____(tmpObj);
    console.log('Pet added.');
}

app.post('/api/addPet', (req, res) => {
    const { petName, petNote, petType, petBD, petOwner } = req._____;
    const tmpData = { _____, ..., _____ };
    _____(tmpData);
    res.status(200).json({ message: '[INFO] Add new pet successfully.' });
})

async function _____(petId){
    const docRef = db.collection("_____").doc(_____);
    await docRef._____();
    console.log('Pet deleted.');
}

app.delete('_____', (req, res) => {
    const { petId } = req._____;
    deletePet(_____);
    res.status(200).json({ message: '[INFO] Deleted pet successfully.' });
});

async function _____(){
    const result = [];
    const petsRef = db.collection('_____');
    const docRef = await petsRef._____();
    docRef.forEach(doc => {
       result.push({
        id: doc.id,
        ..._____
       });
    });
    return _____.stringify(_____);
}

app.get('_____', (req, res) => {
    res.set('Content-type', 'application/json');
    fetchPets().then((jsonData) => {
        res.send(_____);
    }).catch((error) => {
        res.send(error);
    });
});

async function fetchPetById(_____){
    const result = [];
    const petRef = db.collection('_____')
                     .where('_____', '==', petId);
    const docRef = await petRef.get();
    docRef.forEach(doc => {
       result.push({
        id: doc.id,
        ...doc.data()
       });
    });
    return result;
}

app.get('_____', (req, res) => {
    const { petId } = req.params;
    res.set('Content-type', 'application/json');
    _____(petId).then((_____) => {
        res.send(jsonData[0]);
    }).catch((error) => {
        res.send(error);
    });
});

async function _____(petId, petData){
    const docRef = db.collection('_____').doc(_____);
    await docRef._____(_____);
    console.log('Pet updated!');
}

app.post('_____', (req, res) => {
    const { petId, _____, ..., _____ } = req.body;
    updatePet(_____, { petName, petNote, petType, petBD, petOwner });
    res.status(200).json({ message: '[INFO] Pet updated successfully.'});
});
