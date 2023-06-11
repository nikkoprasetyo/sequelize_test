async function findAll(req, res) {
  try {
    const findEmployees = await req.context.models.employees.findAll();
    return res.send(findEmployees);
  } catch (error) {
    return res.send(error);
  }
}

async function findOne(req, res) {
  try {
    const { id } = req.params;
    const findEmployee = await req.context.models.employees.findOne({
      where: { employee_id: id },
    });
    res.send(findEmployee);
  } catch (error) {
    return res.send(error);
  }
}
async function create(req, res) {
  try {
    const employee = await req.context.models.employees.create({
      employee_id: req.body.employee_id,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
    });
    res.send(employee);
  } catch (error) {
    return res.send(error);
  }
}

const update = async (req, res) => {
  try {
    const employee = await req.context.models.employees.update(
      {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
      },
      { returning: true, where: { employee_id: req.params.id } }
    );
    return res.send(employee);
  } catch (error) {
    return res.send(error);
  }
};

const deleted = async (req, res) => {
  try {
    const employee = await req.context.models.employees.destroy({
      where: { employee_id: req.params.id },
    });
    return res.send("delete " + employee + " row");
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
