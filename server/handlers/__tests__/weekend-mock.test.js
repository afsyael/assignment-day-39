const httpMocks = require("node-mocks-http");
const mathHandler = require("../math.js");
// const dateModel = require("../../../storage/models/date.model");

//---------------------------------------------------------------------------------------------------------------------

// jest.mock("../../../storage/models/date.model", () => {

//     return {
//         isWeekend: jest.fn()
//     };
// })

//---------------------------------------------------------------------------------------------------------------------

test("[mock] date returned always 2022-07-10", async () => {

    jest
        .useFakeTimers()
        .setSystemTime(new Date('2022-07-10'));

    console.log(new Date().getDay());

    const request = httpMocks.createRequest({
        method: "GET",
        url: "/is-weekend",
    });

    const response = httpMocks.createResponse();

    // dateModel.isWeekend.mockResolvedValue(0);

    await mathHandler.isWeekend(request, response);

    expect(response.statusCode).toEqual(200);

    expect(response._getJSONData()).toEqual({
        data: true,
        error: null
    });
});

//---------------------------------------------------------------------------------------------------------------------