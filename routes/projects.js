const router = require("express").Router();
const Project = require("../models/Project");
const User = require("../models/User");
// const auth = require("../middlewares/auth");

// get all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find({});
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// get project by id
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const project = await Project.findById(id);

    // if no project is found
    if (project === null) {
      return res.status(400).json({ error: "project not found" });
    }
    res.json(project);
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(400).json({ error: "invalid project id" });
    }
    res.status(400).json({ error: err });
  }
});

// create a project

router.post("/", async (req, res) => {
  const newProject = new Project(req.body);
  try {
    const savedProject = await newProject.save();
    res.status(200).json(savedProject);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update a project

router.put("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (project.userId === req.body.userId) {
      await project.updateOne({ $set: req.body });
      res.status(200).json("The project details has been updated");
    } else {
      res.status(403).json("You can update only your project");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete a project
router.delete("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (project.userId === req.body.userId) {
      await project.deleteOne({ $set: req.body });
      res.status(200).json("The project details has been deleted");
    } else {
      res.status(403).json("You can delete only your project");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// like a project //dislike project

router.put("/:id/like", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project.likes.includes(req.body.userId)) {
      await project.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json("Project has been liked by you ");
    } else {
      await project.updateOne({ $pull: { likes: req.body.user } });
      res.status(200).json("The project has been liked");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// get a project

router.get("/timeline/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    res.status(200).json(project);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get all projects for user
router.get("/timeline", async (req, res) => {
  // let projectArray=[];
  try {
    const currentUser = await User.findById(req.body.userId);
    const userProjects = await Project.find({ userId: currentUser._id });
    const friendProjects = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Project.find({ userId: friendId });
      })
    );
    // const friendProjects = await Promise.all();
    res.json(userProjects.concat(...friendProjects));
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
