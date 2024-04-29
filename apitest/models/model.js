const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  namaPasien: {
    required: true,
    type: String,
  },
  idPasien: {
    required: true,
    type: Number,
  },
  tanggalPengobatan: {
    required: true,
    type: Date,
  },
  keluhan: {
    required: true,
    type: String,
  },
  resepObat: {
    required: true,
    type: String,
  },
  biaya: {
    required: true,
    type: Number,
  },
  asuransi: {
    required: true,
    type: Boolean,
  },
  namaAsuransi: {
    required: true,
    type: String,
  },
  biayaAsuransi: {
    required: true,
    type: Number,
  },
});

module.exports = mongoose.model("DataPasien", dataSchema);
