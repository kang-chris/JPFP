const router = require("express").Router();
const { Campus, Student } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const campuses = await Campus.findAll();
    res.json(campuses);
  } catch (err) {
    next(err);
  }
});

router.get("/:campusId", async (req, res, next) => {
  try {
    const campusId = req.params.campusId;
    const campus = await Campus.findOne({
      where: { id: campusId },
      include: { model: Student },
    });
    res.json(campus);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const campus = await Campus.create(req.body);
    res.send(campus);
  } catch (err) {
    next(err);
  }
});

router.put("/:campusId", async (req, res, next) => {
  try {
    const campusId = req.params.campusId;
    const campus = await Campus.findOne({
      where: { id: campusId },
      include: { model: Student },
    });
    const updatedCampus = await campus.update(req.body)
    res.send(updatedCampus)
  } catch (err) {
    next(err);
  }
});

router.delete("/:campusId", async (req, res, next) => {
  try {
    const campusId = req.params.campusId;
    const campus = await Campus.findByPk(campusId);
    await campus.destroy();
    res.send(campus);
  } catch (error) {
    next(error);
  }
});

module.exports = router;