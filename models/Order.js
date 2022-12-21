import mongoose from "mongoose";

{
  /*-------------  Creating Orders Database commands --------*/
}

const OrderSchema = new mongoose.Schema(
  {
    customer: {
      type: String,
      required: true,
      maxlength: 60,
    },

    address: {
      type: String,
      required: true,
      maxlength: 200,
    },

    total: {
      type: Number,
      required: true,
    },

    status: {
      type: Number,
      default: 0,
    },

    method: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

{
  /* ------- if same name availble check and create database ----------*/
}

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
