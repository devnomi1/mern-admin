const ContactForm = require("../models/ContactForm");

const contactForm = async (req, res) => {
  try {
    const response = req.body;
    await ContactForm.create(response);
    res.status(200).json({ message: "message send Successfully !" });
  } catch (error) {
    return res.status(500).json({ message: "message not delivered" });
  }
};
module.exports = contactForm;
