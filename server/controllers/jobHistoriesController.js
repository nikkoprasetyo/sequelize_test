async function findAll(req, res) {
  try {
    const findJobHistories = await req.context.models.job_history.findAll();
    return res.send(findJobHistories);
  } catch (error) {
    return res.send(error);
  }
}

async function findOne(req, res) {
  try {
    const { id } = req.params;
    const findJobHistory = await req.context.models.job_history.findOne({
      where: { employee_id: id },
    });
    res.send(findJobHistory);
  } catch (error) {
    return res.send(error);
  }
}
async function create(req, res) {
  try {
    const jobHistory = await req.context.models.job_history.create({
      employee_id: req.body.employee_id,
      start_date: new Date(),
      end_date: new Date(),
    });
    res.send(jobHistory);
  } catch (error) {
    return res.send(error);
  }
}

const update = async (req, res) => {
  try {
    const jobHistory = await req.context.models.job_history.update(
      {
        job_id: req.body.job_id,
      },
      { returning: true, where: { employee_id: req.params.id } }
    );
    return res.send(jobHistory);
  } catch (error) {
    return res.send(error);
  }
};

const deleted = async (req, res) => {
  try {
    const jobHistory = await req.context.models.job_history.destroy({
      where: { employee_id: req.params.id },
    });
    return res.send("delete " + jobHistory + " row");
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
