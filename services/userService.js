const crudRepository = require(`../database/crudRepository`);
const User = require(`../models/db/userModel`);
const mongoose = require(`mongoose`);

module.exports.findtById = async (userId) => {
    const responseObj = { status: false };
    try {
        const data = {
            _id: mongoose.Types.ObjectId(userId),
            model: User,
            projection: { __v: false },
        };
        const responseFromRepository = await crudRepository.findById(data);
        if (responseFromRepostitory.status) {
            responseObj.result = responseFromRepository.result;
            responseObj.status = true;
        }
    } catch (error) {
        responseObj.error = error;
        console.log(`ERROR-userService-findById: ${error}`);
    }
    return responseObj;
};
