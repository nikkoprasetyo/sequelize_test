async function findAll(req, res) {
  try {
    const findJobs = await req.context.models.jobs.findAll();
    return res.send(findJobs);
  } catch (error) {
    return res.send(error);
  }
}

async function findOne(req, res) {
  try {
    const { id } = req.params;
    const findJob = await req.context.models.jobs.findOne({
      where: { job_id: id },
    });
    res.send(findJob);
  } catch (error) {
    return res.send(error);
  }
}
async function create(req, res) {
  try {
    const job = await req.context.models.jobs.create({
      job_id: req.body.job_id,
      job_title: req.body.job_title,
      min_salary: req.body.min_salary,
      max_salary: req.body.max_salary,
    });
    res.send(job);
  } catch (error) {
    return res.send(error);
  }
}

const update = async (req, res) => {
  try {
    const job = await req.context.models.jobs.update(
      {
        max_salary: req.body.max_salary,
      },
      { returning: true, where: { job_id: req.params.id } }
    );
    return res.send(job);
  } catch (error) {
    return res.send(error);
  }
};

const deleted = async (req, res) => {
  try {
    const job = await req.context.models.jobs.destroy({
      where: { job_id: req.params.id },
    });
    return res.send("delete " + job + " row");
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
