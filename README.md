# Patients-API


## Usage/Examples

```json
[
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
]
```

