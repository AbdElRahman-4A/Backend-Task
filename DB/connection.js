import mongoose from "mongoose";

const db_connection = async () => {
  await mongoose
    .connect(process.env.DATABASE_NAME)
    .then((res) => console.log(`DB connected`))
    .catch((err) => console.log(err));
};

export default db_connection;
