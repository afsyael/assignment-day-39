const mathModel = require("../../storage/models/math.model");

const isWeekend = async (req, res) => {
        const result = await mathModel.isWeekend();

        res.json({
            data: result,
            error: null
        });
        res.end();
};

//---------------------------------------------------------------------------------------------------------------------

const isLeapYear = async (req, res) => {
        const result = await mathModel.isLeapYear();

        res.json({
            data: result,
            error: null
        });
        res.end();
};

//---------------------------------------------------------------------------------------------------------------------

module.exports = {
    isWeekend,
    isLeapYear,
};