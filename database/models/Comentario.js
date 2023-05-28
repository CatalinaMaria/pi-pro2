module.exports = function (sequelize, dataTypes) {
    let alias = "Comentario";
    let cols = {
        id: {
            autoIncrement : true,
            primaryKey : true,
            type: dataTypes.INTEGER
        },
        idProducto: {
            type: dataTypes.INTEGER
        },
        idUsuario: {
            type: dataTypes.INTEGER
        },
        commentario: {
            type: dataTypes.STRING(1000)
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
        tableName: "comentarios",
        timestamps: false,
        underscored: true
    }
    let Comentario = sequelize.define (alias, cols, config);
    return Comentario;
}