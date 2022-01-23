export default (req, res) => {
  res.status(200).json({ greeting: `Hello, ${req.body.name}` });
};
