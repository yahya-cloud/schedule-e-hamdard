export const schemaConstants = {
  string: { type: String, required: true },
  number: { type: Number, required: true },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    required: true,
  },
  phone: {
    type: Number,
    match: /^\d{10}$/,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  uniqueField: {
    type: String,
    unique: true,
    required: true,
  },
};

export const constants = {
  BAD_REQUEST: "Bad Request : Invalid request format",
  NUMBER_STRING: "1234567890",
  ALPHABET_STRING: "ABCDEFGHI",
  BY_PASS_REQUESTS: [
    "/v1/staff",
    "/v1/user",
    "/v1/user/login",
    "/v1/user/createMany",
    "/v1/staff/createMany",
    "/v1/student/removeAll",
  ],
  CHANGE_REQUEST_TYPES: ["POST", "PATCH", "DELETE", "PUT"],
  STAFF: ["teacher", "admin"],
};
