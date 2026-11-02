const essaysService = require('./essays.service');

const list = (req, res) => {
  const { theme } = req.query;

  if (theme && !essaysService.themes.includes(theme)) {
    return res.status(400).json({ message: 'Unknown theme' });
  }

  res.json({ themes: essaysService.themes, essays: essaysService.list(theme) });
};

const getBySlug = (req, res) => {
  const essay = essaysService.getBySlug(req.params.slug);

  if (!essay) {
    return res.status(404).json({ message: 'Essay not found' });
  }

  res.json(essay);
};

module.exports = { list, getBySlug };
