const router = require("express").Router();
const { Student, Campus } = require("../db");


router.get("/", async (req, res, next) => {
    try {
        const students = await Student.findAll();
        res.json(students);
    } catch (err) {
        next(err);
    }
});

router.get("/:studentId", async (req, res, next) => {
    try {
        const studentId = req.params.studentId;
        const student = await Student.findOne({
            where: { id: studentId },
            include: { model: Campus },
        });
        res.json(student);
    } catch (err) {
        next(err);
    }
});

router.post("/", async (req, res, next) => {
    try {
        const student = await Student.create(req.body);
        res.send(student);
    } catch (err) {
        next(err);
    }
});

router.put("/:studentId", async (req, res, next) => {
    try {
        const studentId = req.params.studentId;
        const student = await Student.findOne({
            where: { id: studentId },
            include: { model: Campus },
        });
        const updatedStudent = await student.update(req.body)
        res.send(updatedStudent)
    } catch (err) {
        next(err);
    }
});

router.delete("/:studentId", async (req, res, next) => {
    try {
        const studentId = req.params.studentId;
        const student = await Student.findByPk(studentId);
        await student.destroy();
        res.send(student);
    } catch (error) {
        next(error);
    }
});



module.exports = router;