const req = require("express/lib/request");
const res = require("express/lib/response");
const { eventNames } = require("../model/eventModels");
const Event = require("../model/eventModels");
// const Bcrypt = require("bcryptjs");

const eventName = async (req, res) => {
  try {
    return res.send({ status: 200, message: "Succesfully" });
  } catch (err) {
    console.log(err.message);
    return res.send({ status: 500, message: "Something went wrong, please try again later!" });
  }
};

// Insert Data
const insertEvent = async (req, res) => {
  const data = req.body;
  console.log(data, "}}}");
  const result = await Event.findOne({
    eventName: data.eventName,
    eventAddress: data.eventAddress,
  });
  console.log(result);
  data.createdAt = Date.now();
  data.updatedAt = Date.now();

  if (
    data.eventName == "" ||
    data.eventAddress == "" ||
    data.eventName == null ||
    data.eventAddress == null ||
    data.eventDescription == "" ||
    data.eventDescription == null
  ) {
    return res.status(409).send({ status: 404, message: "every field is required" });
  }
  if (result) {
    return res.status(404).send({ message: "Event already exists,try again!!" });
  }
  // const result = await Event.findOne({eventDate:data.eventDate})
  // if (result){
  //   return res.status(409).send({message:"Event "})
  // }

  try {
    const obg = new Event(data);
    obg.save();
    return res.status(200).send({ status: 200, message: "data is inserted suceesfully", data });
  } catch (err) {
    console.log("error", err);
    return res.status(500).send({ status: 500, message: "Something went wrong" });
  }
};

const eventAddress = async (req, res) => {
  //     // for all data
  try {
    console.log("isha");
    const result = await Event.find();
    console.log(result);
    return res.send(result);
  } catch (err) {
    console.log(err);
    return res.status(500).send({ status: 500, message: "unale to get data" });
  }
};
// update Document
const updateEvent = async (req, res) => {
  const data = req.body;

  const result = await Event.findOne({
    eventName: data.eventName,
    _id: { $ne: req.params.id },
  });
  data.updatedAt = Date.now();

  const id = req.params.id;
  try {
    const idData = await Event.findOne({ _id: id });
    console.log(idData);
    if (!idData) {
      res.status(409).send({ status: 200, message: "dfhadL" });
    }
  } catch (err) {
    res.status(200).send({ status: 200, message: "User not found" });
  }
  if (result) {
    res.status(409).send({ status: 200, message: "Same name is already exist take another name" });
    console.log("+++++++++++++++++++++");
  }

  try {
    const result = await Event.updateOne(
      { _id: req.params.id },
      {
        eventName: req.body.eventName,
        phoneNumber: req.body.phoneNumber,
        eventAddress: req.body.eventAddress,
      }
    );
    // console.log(eventName);

    console.log(result, "hello");
    res.send({ status: 200, message: "Succesfully Update Doc" });
  } catch (err) {
    console.log(err.message);
  }
};
// single Doc
const singleEvent = async (req, res) => {
  try {
    const result = await Event.findOne(
      { _id: req.params.id },
      {
        eventName: req.body.eventName,
        phoneNumber: req.body.phoneNumber,
        eventAddress: req.body.eventAddress,
      }
    );

    console.log(result, "hello");
    res.send(result);
    res.send({ status: 200, message: "succesfulupdate Doc" });
  } catch (err) {
    console.log(err.message);
  }
};
// Delete Event
const deleteEvent = async (req, res) => {
  // console.log("ishadel");

  try {
    const result = await Event.deleteOne({ id: req.params.id });
    console.log(result);

    res.send({ status: 200, message: "Deleted successfully" });
  } catch (err) {
    console.log(err.message);
  }
};
const eventdate = (req, res) => {
  const data = req.body;
  console.log(data, "kjvkfhv");
  res.send({ status: 200, message: data });
};

module.exports = {
  eventName,
  insertEvent,
  eventAddress,
  updateEvent,
  singleEvent,
  deleteEvent,
  eventdate,
};
