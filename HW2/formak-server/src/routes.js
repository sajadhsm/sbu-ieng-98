const router = require('express').Router();

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

module.exports = router;