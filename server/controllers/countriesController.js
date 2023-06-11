async function findAll(req, res) {
  try {
    const countries = await req.context.models.countries.findAll();
    return res.send(countries);
  } catch (error) {
    return res.send(error);
  }
}

async function findOne(req, res) {
  try {
    const { id } = req.params;
    const findCountry = await req.context.models.countries.findOne({
      where: { country_id: id },
    });
    res.send(findCountry);
  } catch (error) {
    return res.send(error);
  }
}
async function create(req, res) {
  try {
    const country = await req.context.models.countries.create({
      country_id: req.body.country_id,
      country_name: req.body.country_name,
      region_id: req.body.region_id,
    });
    res.send(country);
  } catch (error) {
    return res.send(error);
  }
}

const update = async (req, res) => {
  try {
    const country = await req.context.models.countries.update(
      {
        country_name: req.body.country_name,
      },
      { returning: true, where: { country_id: req.params.id } }
    );
    return res.send(country);
  } catch (error) {
    return res.send(error);
  }
};

const deleted = async (req, res) => {
  try {
    const country = await req.context.models.countries.destroy({
      where: { country_id: req.params.id },
    });
    return res.send("delete " + country + " row");
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
