const httpMocks = require("node-mocks-http");
const mathHandler = require("../math.js");

test("[mock] year returned always 2024-07-10", async () => {

    jest
        .useFakeTimers()
        .setSystemTime(new Date('2024-07-10'));

    console.log(new Date().getFullYear());

    const request = httpMocks.createRequest({
        method: "GET",
        url: "/is-leap-year",
    });

    const response = httpMocks.createResponse();
    await mathHandler.isLeapYear(request, response);
    expect(response.statusCode).toEqual(200);
    expect(response._getJSONData()).toEqual({
        data: true,
        error: null
    });
});