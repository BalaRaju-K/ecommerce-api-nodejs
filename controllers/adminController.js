const { User } = require("../models/User");

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            attributes: ['name', 'email', 'role']
        });

        res.status(200).json({ users });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
