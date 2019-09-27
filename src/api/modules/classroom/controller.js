import Classroom from './model';

class ClassroomController {
  async store(req, res) {
    const { professorId } = req.params;

    const { name, description } = req.body;

    const data = {
      name,
      description,
      professor_id: professorId,
    };

    const classroom = await Classroom.create(data);

    return res.json(classroom);
  }
}

export default new ClassroomController();
