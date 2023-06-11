async function findAll(req, res) {
  try {
    const findLocations = await req.context.models.locations.findAll();
    return res.send(findLocations);
  } catch (error) {
    return res.send(error);
  }
}

async function findOne(req, res) {
  try {
    const { id } = req.params;
    const findLocation = await req.context.models.locations.findOne({
      where: { location_id: id },
    });
    res.send(findLocation);
  } catch (error) {
    return res.send(error);
  }
}
async function create(req, res) {
  try {
    const location = await req.context.models.locations.create({
      location_id: req.body.location_id,
      street_address: req.body.street_address,
      postal_code: req.body.postal_code,
      city: req.body.city,
      state_province: req.body.state_province,
    });
    res.send(location);
  } catch (error) {
    return res.send(error);
  }
}

const update = async (req, res) => {
  try {
    const location = await req.context.models.locations.update(
      {
        postal_code: req.body.postal_code,
      },
      { returning: true, where: { location_id: req.params.id } }
    );
    return res.send(location);
  } catch (error) {
    return res.send(error);
  }
};

const deleted = async (req, res) => {
  try {
    const location = await req.context.models.locations.destroy({
      where: { location_id: req.params.id },
    });
    return res.send("delete " + location + " row");
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
