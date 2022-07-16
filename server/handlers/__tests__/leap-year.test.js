const httpMocks = require("node-mocks-http");
const mathHandler = require("../math.js");

test("this year should return false", async () => {

    const request = httpMocks.createRequest({
        method: "GET",
        url: "/leap-year",
    });

    const response = httpMocks.createResponse();
    await mathHandler.isLeapYear(request, response);
    expect(response._getJSONData()).toEqual({
        data: false,
        error: null
    });
});