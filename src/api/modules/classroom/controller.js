import Classroom from './model';

class ClassroomController {
  async store(req, res) {
    const userId = req.userId;

    const { name, description } = req.body;

    const data = {
      name,
      description,
      user_id: userId,
    };

    const classroom = await Classroom.create(data);

    return res.json(classroom);
  }
}

export default new ClassroomController();
