require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const ejs = require("ejs");
const fs = require("fs");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const path = require("path");
const Stripe = require("stripe");

module.exports = {
  express,
  cors,
  bodyParser,
  mongoose,
  nodemailer,
  jwt,
  ejs,
  fs,
  bcrypt,
  saltRounds,
  path,
  Stripe
};
