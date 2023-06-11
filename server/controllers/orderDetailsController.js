async function findAll(req, res) {
  try {
    const findOrderDetails = await req.context.models.order_details.findAll();
    return res.send(findOrderDetails);
  } catch (error) {
    return res.send(error);
  }
}

async function findOne(req, res) {
  try {
    const { id } = req.params;
    const findOrderDetail = await req.context.models.order_details.findOne({
      where: { ordet_order_id: id },
    });
    res.send(findOrderDetail);
  } catch (error) {
    return res.send(error);
  }
}
async function create(req, res) {
  try {
    const orderDetail = await req.context.models.order_details.create({
      ordet_order_id: req.body.ordet_order_id,
      ordet_prod_id: req.body.ordet_prod_id,
      ordet_price: req.body.ordet_price,
      ordet_quantity: req.body.ordet_quantity,
      ordet_discount: req.body.ordet_discount,
    });
    res.send(orderDetail);
  } catch (error) {
    return res.send(error);
  }
}

const update = async (req, res) => {
  try {
    const orderDetail = await req.context.models.order_details.update(
      {
        ordet_price: req.body.ordet_price,
      },
      { returning: true, where: { ordet_order_id: req.params.id } }
    );
    return res.send(orderDetail);
  } catch (error) {
    return res.send(error);
  }
};

const deleted = async (req, res) => {
  try {
    const order_details = await req.context.models.order_details.destroy({
      where: { ordet_order_id: req.params.id },
    });
    return res.send("delete " + order_details + " row");
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
