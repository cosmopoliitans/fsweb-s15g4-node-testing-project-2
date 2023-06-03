const gorevModel = require("./gorev-model");

async function checkGorevId(req, res, next) {
  // id var mı yok mu kontrolü
  try {
    let id = req.params.id || req.body.GorevId; //hem gorevRouterında hem de task routerında aynı mw methodunu kullanmak için.
    const isExistGorev = await gorevModel.getById(id);
    if (!isExistGorev) {
      res.status(404).json({ message: "Böyle bir görev yok!" });
    } else {
      req.currentGorev = isExistGorev;
      next();
    }
  } catch (error) {
    next(error);
  }
}
async function checkPayload(req, res, next) {
  // adı boş olamaz kontrolü
  try {
    let { Adi } = req.body;
    if (!Adi) {
      res.status(400).json({ message: "Görev Adı boş olamaz!" });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
}
module.exports = { checkGorevId, checkPayload };
