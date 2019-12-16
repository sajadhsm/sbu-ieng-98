const router = require('express').Router();
const uuidv4 = require('uuid/v4');

const db = require('./db');

router.get('/forms', (req, res) => {
  const formsTitle = db.forms.map(({ id, title }) => ({
    id,
    title
  }));

  res.json({ forms: formsTitle });
});

router.get('/forms/:formId', (req, res) => {
  // TODO: Validate param
  const { formId } = req.params;
  const form = db.forms.find(({ id }) => id == formId);

  res.json({ form });
});

router.post('/forms/:formId', (req, res) => {
  const { formId } = req.params;
  // TODO: Validate incoming data
  const validSubmission = {
    ...req.body,
    id: uuidv4(),
    formId: formId
  };

  db.submissions.push(validSubmission);
  console.log('Latest submissions:', db.submissions.slice(-5));
  res.json({ message: 'Form has been successfully submitted.' });
});

module.exports = router;