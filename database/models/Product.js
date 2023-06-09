module.exports = function (sequelize, dataTypes) {
    let alias = "Product";
    let cols = {
        idProducto: {
            autoIncrement : true,
            primaryKey : true,
            type: dataTypes.INTEGER
        },
        nombreProducto: {
            type: dataTypes.STRING(400)
        },
        descripcion: {
            type: dataTypes.STRING(1000)
        },
        imagen: {
            type: dataTypes.STRING
        },
        clienteId: {
            type: dataTypes.INTEGER
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        },
        deletedAt: {
            type: dataTypes.DATE
        },

    }
    let config = {
        tableName: "productos",
        timestamps: false,
        underscored: false
    }
    let Product = sequelize.define (alias, cols, config);

    Product.associate = function(models){
        Product.hasMany(models.Comentario,{
            as: "productoComentarios",
            foreignKey: "idProducto",
        })
        Product.belongsTo(models.Usuario,{
            as: "usuarioProducto",
            foreignKey: "clienteId",
        })
    }
    

    return Product;
}