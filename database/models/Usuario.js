module.exports = function (sequelize, dataTypes) {
    let alias = "Usuario";
    let cols = {
        id: {
            autoIncrement : true,
            primaryKey : true,
            type: dataTypes.INTEGER
        },
        email: {
            type: dataTypes.STRING(400)
        },
        contraseña: {
            type: dataTypes.STRING(400)
        },
        fotoPerfil: {
            type: dataTypes.STRING(400)
        },
        fecha: {
            type: dataTypes.DATE
        },
        dni: {
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
        tableName: "usuarios",
        timestamps: false,
        underscored: true
    }
    let Usuario = sequelize.define (alias, cols, config);
    Usuario.associate = function(models){
        Usuario.hasMany(models.Product,{
            as: "productoUsuario",
            foreignKey: "clienteId",
        }),
        Usuario.hasMany(models.Comentario,{
            as: "comentarioUsuario",
            foreignKey: "idUsuario",
        })
    }
    return Usuario;
}