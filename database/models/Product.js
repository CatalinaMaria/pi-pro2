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
        underscored: true
    }
    let Product = sequelize.define (alias, cols, config);
    return Product;
}