const express = require('express');
const router = express.Router();

const { doc } = require('../utils');

router.post('/', async function (req, res) {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    instagram,
    startWeekOn,
    startDate,
    weeks,
  } = req.body;
  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0];
  await sheet.addRow({
    'First Name': firstName,
    'Last Name': lastName,
    Email: email,
    'Phone Number': phoneNumber,
    Instagram: instagram,
    'Start Week On': startWeekOn,
    'Start Date': startDate,
    Weeks: weeks,
    'Created At': new Date(),
  });
  return res.json({ success: true });
});

module.exports = router;
