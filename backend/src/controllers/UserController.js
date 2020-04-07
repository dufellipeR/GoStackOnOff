const User = require("../models/User");

module.exports = {
  //@desc Get all user
  //@route GET /api/v1/user
  //@acess Public
  async index(req, res, next) {
    const users = await User.find();
    users.map((user) => {
      user.password = "";
    });
    return res.status(200).json({ success: true, users });
  },

  //@desc Get single user
  //@route GET /api/v1/user/:id
  //@acess Private
  async show(req, res, next) {
    const { _id } = req.params;

    const { user_id, isadmin } = req.headers;

    if (_id != user_id && !isadmin) {
      return res.status(401).json({ success: false, msg: `Unathorized` });
    }

    let user = await User.findOne({ _id });

    if (!user) {
      return res.status(404).json({ success: false, msg: `No user founded` });
    }

    return res.status(200).json({ success: true, user });
  },

  //@desc Create a user
  //@route POST /api/v1/user
  //@acess Private
  async store(req, res, next) {
    const { user_id, isadmin } = req.headers;
    const { username, password, active, lastClass, isAdmin } = req.body;

    let user = await User.findOne({ username });

    if (!user) {
      user = await User.create({
        username,
        password,
        active,
        lastClass,
        isAdmin,
      });
    }

    return res.json(user);
  },

  //@desc Update user
  //@route PUT /api/v1/user/:id
  //@acess Public
  async update(req, res, next) {
    const { _id } = req.params;
    const { user_id, isadmin } = req.headers;

    const {
      username,
      password,
      active,
      lastClass,
      lastLogin,
      isAdmin,
    } = req.body;

    if (_id != user_id && !isadmin) {
      return res.status(401).json({ success: false, msg: `Unathorized` });
    }

    let user = await User.findByIdAndUpdate(
      { _id },
      { username, password, active, lastClass, lastLogin }
    );

    if (!user) {
      return res.status(404).json({ success: false, msg: `No user founded` });
    }

    return res.status(200).json({ success: true, user });
  },

  //@desc Delete user
  //@route DELETE /api/v1/user/:id
  //@acess Public
  async delete(req, res, next) {
    const { _id } = req.params;
    const { user_id, isadmin } = req.headers;
    console.log(isadmin);

    if (_id != user_id && !isadmin) {
      return res.status(401).json({ success: false, msg: `Unathorized` });
    }

    let user = await User.findByIdAndDelete({ _id });

    if (!user) {
      return res.status(404).json({ success: false, msg: `No user founded` });
    }

    return res
      .status(200)
      .json({ success: true, msg: `Deleted user ${req.params._id}` });
  },
};
