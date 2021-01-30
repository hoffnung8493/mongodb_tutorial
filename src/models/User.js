const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    name: {
      first: { type: String, required: true },
      last: { type: String, required: true },
    },
    age: { type: Number, index: true },
    email: String,
  },
  { timestamps: true }
);

UserSchema.virtual("fullName").get(function () {
  if (!this.name.first || !this.name.last) return null;
  return `${this.name.first} ${this.name.last}`;
});

UserSchema.set("toObject", { virtuals: true });
UserSchema.set("toJSON", { virtuals: true });

const User = model("user", UserSchema);
module.exports = { User };
