const User = require("../models/User");

module.exports = {
  //@desc Get all user
  //@route GET /api/v1/user
  //@acess Public
  index(req, res, next) {
    res.status(200).json({ success: true, msg: "Show all user" });
  },

  //@desc Get single user
  //@route GET /api/v1/user/:id
  //@acess Public
  show(req, res, next) {
    res
      .status(200)
      .json({ success: true, msg: `Show single user ${req.params.id}` });
  },

  //@desc Create a user
  //@route POST /api/v1/user
  //@acess Private
  async store(req, res, next) {
    const { username, password } = req.body;

    let user = await User.findOne({ username, password });
    if (!user) {
      return res
        .status(401)
        .json({
          success: false,
          msg: `No user with that username or password`,
        });
    } else {
      return res.status(200).json({ success: true, user });
    }
  },

  //@desc Update user
  //@route PUT /api/v1/user/:id
  //@acess Public
  update(req, res, next) {
    res
      .status(200)
      .json({ success: true, msg: `Update user ${req.params.id}` });
  },

  //@desc Delete user
  //@route DELETE /api/v1/user/:id
  //@acess Public
  delete(req, res, next) {
    res
      .status(200)
      .json({ success: true, msg: `Delete user ${req.params.id}` });
  },
};
