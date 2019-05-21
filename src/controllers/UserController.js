const { User } = require("../../app/models");

class UserController {
  async create(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.json(err);
    }
  }

  async allUsers(req, res) {
    const users = await User.findAll();
    res.json(users);
  }

  async userById(req, res) {
    const user = await User.findAll({
      where: {
        id: req.params.id
      }
    });
    res.json(user);
  }

  async editUser(req, res) {
    const user = await User.findAll({
      where: {
        id: req.params.id
      }
    });

    if (user.length == 0)
      return res.json({
        statusCode: 401,
        errorMessage: "User not found!",
        response: "User not found!"
      });

    try {
      await User.update(
        {
          name: req.body.name,
          email: req.body.email
        },
        {
          where: {
            id: req.params.id
          }
        }
      );

      res.json({
        statusCode: 200,
        errorMessage: null,
        response: "Edited Successfully!"
      });
    } catch (err) {
      res.json(err);
    }
  }

  async deleteUser(req, res) {
    const user = await User.findAll({
      where: {
        id: req.params.id
      }
    });

    if (user.length == 0)
      return res.json({
        statusCode: 401,
        errorMessage: "User not found!",
        response: "User not found!"
      });

    try {
      await User.destroy({
        where: {
          id: req.params.id
        }
      });

      res.json({
        statusCode: 200,
        errorMessage: null,
        response: "Deleted Successfully!"
      });
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = new UserController();
