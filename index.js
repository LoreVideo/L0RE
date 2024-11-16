const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require('mongoose');

const app = express();

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}