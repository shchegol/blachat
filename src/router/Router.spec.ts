import {expect} from "chai";
import {appRouter} from "./Router";
import Chat from "../pages/chat/Chat";

describe("Router", () => {
    describe("before add route", () => {
        it("appRouter should return empty array in routes", () => {
            expect(appRouter.routes)
                .to.be.an("array")
                .that.is.empty;
        })
    })

    describe("after add route", () => {
        it("should return 1 routes", () => {
            appRouter.use("/", Chat)
            expect(appRouter.routes.length).to.equal(1)
        })
    })
})