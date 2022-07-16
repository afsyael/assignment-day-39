const httpMocks = require("node-mocks-http");
const mathHandler = require("../math.js");

test("today should return true", async () => {

    const request = httpMocks.createRequest({
        method: "GET",
        url: "/is-weekend",
    });

    const response = httpMocks.createResponse();
    await mathHandler.isWeekend(request, response);
    expect(response._getJSONData()).toEqual({
        data: true,
        error: null
    });
});