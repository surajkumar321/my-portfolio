const router = require('express').Router();
const Project = require('../models/Project');
const { protect, adminOnly } = require('../middleware/authMiddleware');

// PUBLIC ROUTE: Get all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: 'Could not fetch projects.' });
  }
});

// PROTECTED ADMIN ROUTE: Create a new project
router.post('/', protect, adminOnly, async (req, res) => {
  try {
    const newProject = new Project(req.body);
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (err) {
    res.status(400).json({ message: 'Could not create project.' });
  }
});

// PROTECTED ADMIN ROUTE: Update a project
router.put('/:id', protect, adminOnly, async (req, res) => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedProject) return res.status(404).json({ message: "Project not found." });
    res.json(updatedProject);
  } catch (err) {
    res.status(400).json({ message: 'Could not update project.' });
  }
});

// PROTECTED ADMIN ROUTE: Delete a project
router.delete('/:id', protect, adminOnly, async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found." });
    res.json({ message: 'Project deleted successfully.' });
  } catch (err) {
    res.status(500).json({ message: 'Could not delete project.' });
  }
});

module.exports = router;