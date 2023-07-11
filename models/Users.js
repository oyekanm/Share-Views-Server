const bycryptjs = require("bcryptjs")

module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },{
      hooks: {
        async beforeCreate(user) {
          const salt = await bycryptjs.genSalt(10)
         const hash = await bycryptjs.hash(user.dataValues.password,salt)
         user.dataValues.password = hash;
         // console.log(user.dataValues.password,hash);
        // console.log(user);
        }
      }
    });

    // Users.beforeCreate()
  
    Users.associate = (models) => {
      Users.hasMany(models.Comments, {
        onDelete: "cascade",
      })
      Users.hasMany(models.Likes, {
        onDelete: "cascade",
      });
  
      Users.hasMany(models.Posts, {
        onDelete: "cascade",
      });
    }
  
    return Users;
  };
  