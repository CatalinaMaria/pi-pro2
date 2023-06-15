const data= require("../data/data")
const db = require('../database/models') 
const Product = db.Product;
const op = db.Sequelize.Op; 

const indexController =  {
    principal:function(req, res, next) {
        let relaciones = {
            include:[
                {association:'productosUsuarios'}, 
                {association:'comentarios'} 
            ]
        }
        Product.findAll(relaciones,

        {order:[
            ['createdAt', 'DESC']
        ]})
        
        .then(function(data){
           console.log(data);
        return res.render('index', {productos:data});
           

        }).catch(function(error){
            console.log(error);
            res.send({error})
        })
        
    },
    search: function (req,res) {
        let busqueda = req.query.busqueda;
        
        let relaciones = {
            include:[
                {association:'productosUsuarios'},
                {association:'comentarios', include:[{association:'usuarioComentario'}]}
            ]
        };
        let criterio = {
            where:{
                [op.or]:[ 
                {nombreProducto:{[op.like]:"%"+busqueda+"%"}},
                {descripcion:{[op.like]:"%"+busqueda+"%"}}]
                },  
            order:[
                ['nombreProducto', 'DESC']
            ]
        }
        Product.findAll(criterio, relaciones) 
        .then(function(data){
            return res.render('search-results', {productos:data})
        })
        
        //.then(data => res.render('search-results'))
        //return res.render("search-results")
        
    }
}


module.exports = indexController 