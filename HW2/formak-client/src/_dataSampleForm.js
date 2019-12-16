const sampleForm = {
  "id": 1234,
  "title": "A smaple form",
  "fields": [
    {
      "name": "First_Name",
      "title": "First Name",
      "type": "Text",
      "required": true
    },
    {
      "name": "Age",
      "title": "Age",
      "type": "Date",
      "required": true
    },
    {
      "name": "Cats_Count",
      "title": "Number of cats",
      "type": "Number",
      "required": false
    },
    {
      "name": "Loc",
      "title": "Your Location",
      "type": "Location",
      "required": false
    },

    {
      "name": "Request_Type",
      "title": "Request Type",
      "type": "Text",
      "options": [
        { "label": "Help", "value": "Help" },
        { "label": "Info", "value": "Information" }
      ]
    },
    {
      "name": "Base_Location",
      "title": "Base Location",
      "type": "Location",
      "options": [
        { "label": "Base1", "value": { "lat": 1.2, "long": 3.2 } },
        { "label": "Base2", "value": { "lat": 2.3, "long": 1.434 } }
      ]
    }
  ]
};

export default sampleForm;