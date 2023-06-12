const db = require ("../database/models");
const usuario = db.Usuario;
const producto =db.Product;
const op = db.Sequelize.Op;


const indexController = {
    index: function(req, res) {
      let criterio ={
        include: [
      {association: "productoUsuario"},
      {association: "comentarioUsuario"}
    ]
      }
    },

    results: function (req, res){
      let busqueda = req.query.busqueda;
      console.log(busqueda);
      let relaciones ={
          include: [
            {association: "productoUsuario"},
            {association: "comentarioUsuario"}
          ]
      };
      let criterio = {
          where:{
              [op.or]:[
                  {nombre: {[op.like]:'%'+busqueda+'%'}},
                  {descripcion:{[op.like]:'%'+busqueda+'%'}}
              ]
          },
          order: [['createdAt', 'DESC']]
      }
      Producto.findAll(criterio, relaciones)
          .then(function(data){
              //return res.send(data);
              return res.render('search-results', {products: data});
          })
          .catch(function(error){
              console.log(error);
         
      })    
      
  },
  searchresultsUser: function(req,res) {
      let busqueda = req.query.search;
      let criterio = {
          where: {
              [op.or]: [{
                    nombre: {
                       [op.like]: "%"+busqueda+"%"
                    }
                 },
                 {
                    email: {
                       [op.like]: "%"+busqueda+"%"
                    }
                 }
              ]
           }
          
          }
          Usuario.findAll(criterio)

          .then(function(user){

              

              return res.render('searchresults-user', {user : user})
                          
                      
                       
          }).catch(function(err) {
              console.log(err);
          })    
      },
    
    store: function (req,res){
      console.log(req.body);
      res.redirect("/search-results")
  },
};


module.exports = indexController;