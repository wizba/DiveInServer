const RestuarantHandlers = require('../controller/resturantController.js')
module.exports = (app)=>{
    
    app.route('/resturant')
      .post(RestuarantHandlers.createResturent);

    app.route('/resturant/:id')
    .put(RestuarantHandlers.update);

    app.route('/resturant/:id')
    .delete(RestuarantHandlers.delete);

    app.route('/resturant')
    .get(RestuarantHandlers.get);

  };