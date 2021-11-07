const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express()
const port = process.env.PORT || 3000;

let patients = [{
    "patientid": 1,
    "name": "Dummy name 1",
    "Disease": "COVID",
    "Category": "Emergency",
    "date": "2019-01-02"
},
{
    "patientid": 2,
    "name": "Dummy name 2",
    "Disease": "CANCER",
    "Category": "Emergency",
    "date": "2019-01-05"
},
{
    "patientid": 3,
    "name": "Dummy name 3",
    "Disease": "Common Cold",
    "Category": "Normal",
    "date": "2019-01-10"
}];

let docs = [
    {
        "Endpoint": "/patients/",
        "method": "GET",
        "body": null,
        "description": "Returns an array of patients"
    },
    {
        "Endpoint": "/patients/:id",
        "method": "GET",
        "body": null,
        "description": "Returns a single patients with the given id"
    },
    {
        "Endpoint": "/patients/",
        "method": "POST",
        "body": {
            "body": ""
        },
        "description": "Creates new patient with data sent in post request"
    },
    {
        "Endpoint": "/patients/id",
        "method": "POST",
        "body": {
            "body": ""
        },
        "description": "Edits an Existing patient with given id"
    },
    {
        "Endpoint": "/patients/id",
        "method": "DELETE",
        "body": null,
        "description": "Deletes an existing patient"
    }
];

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/patients', (req, res) => {

    const patient = req.body;

    console.log(patient);
    patients.push(patient);

    res.send('Patient is added to the database');
});

app.get('/patients', (req, res) => {
    res.json(patients);
});

app.get('/', (req, res) => {
    res.json(docs);
});

app.get('/patients/:patientid', (req, res) => {

    const patientid = req.params.patientid;
    console.log(patientid);

    for (let patient of patients) {
        console.log("Inside loop");
        if (patient.patientid == patientid) {
            console.log("Patient found");
            res.json(patient);
            console.log(patient);
            return;
        }
    }

    res.status(404).send('Patient not found');
});

app.delete('/patients/:patientid', (req, res) => {

    const patientid = req.params.patientid;

    patients = patients.filter(i => {
        if (i.patientid != patientid) {
            return true;
        }

        return false;
    });

    res.send('Patient is deleted');
});

app.post('/patients/:patientid', (req, res) => {

    const patientid = req.params.patientid;
    const newPatient = req.body;

    for (let i = 0; i < patients.length; i++) {
        let patient = patients[i]

        if (patient.patientid == patientid) {
            patients[i] = newPatient;
        }
    }

    res.send('Patient is edited');
});

app.listen(port, () => console.log(`Patients app listening on port ${port}!`));