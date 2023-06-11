async function findAll(req, res) {
  try {
    const findDepartments = await req.context.models.departments.findAll();
    return res.send(findDepartments);
  } catch (error) {
    return res.send(error);
  }
}

async function findOne(req, res) {
  try {
    const { id } = req.params;
    const findDepartment = await req.context.models.departments.findOne({
      where: { department_id: id },
    });
    res.send(findDepartment);
  } catch (error) {
    return res.send(error);
  }
}
async function create(req, res) {
  try {
    const department = await req.context.models.departments.create({
      department_id: req.body.department_id,
      department_name: req.body.department_name,
      location_id: req.body.location_id,
    });
    res.send(department);
  } catch (error) {
    return res.send(error);
  }
}

const update = async (req, res) => {
  try {
    const department = await req.context.models.departments.update(
      {
        department_name: req.body.department_name,
      },
      { returning: true, where: { department_id: req.params.id } }
    );
    return res.send(department);
  } catch (error) {
    return res.send(error);
  }
};

const deleted = async (req, res) => {
  try {
    const department = await req.context.models.departments.destroy({
      where: { department_id: req.params.id },
    });
    return res.send("delete " + department + " row");
  } catch (error) {
    return res.send(error);
  }
};

export default {
  findAll,
  findOne,
  create,
  update,
  deleted,
};
