const express = require("express");
const sequelize = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const adminRoutes = require("./routes/adminRoutes");
const { User } = require("./models/User");
const bcrypt = require("bcryptjs");
require("dotenv").config(); 

const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/admin", adminRoutes);

const createSuperAdmin = async () => {
    try {
        const existingAdmin = await User.findOne({ where: { role: "admin" } });

        if (!existingAdmin) {
            console.log("🔹 No Super Admin found, creating one...");

            const hashedPassword = await bcrypt.hash("SuperAdmin@123", 10);  
            await User.create({
                name: "Super Admin",
                email: "superadmin@example.com",
                password: hashedPassword,
                role: "admin"
            });

            console.log("Super Admin created successfully!");
        } else {
            console.log("Super Admin already exists.");
        }
    } catch (error) {
        console.error("Error creating Super Admin:", error);
    }
};

sequelize.sync({ force: true })
    .then(async () => {
        console.log("Sequelize models synchronized");

        await createSuperAdmin();
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Sequelize sync failed:", error);
    });

sequelize.authenticate()
    .then(() => console.log("Database connected successfully!"))
    .catch((error) => console.error("Database connection failed:", error));

app.get("/", (req, res) => {
    res.send("E-commerce API is running...");
});
