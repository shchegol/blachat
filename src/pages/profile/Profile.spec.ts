import {expect}        from "chai";
import Profile         from "./Profile";

let profile: Profile;

beforeEach(() => {
    profile = new Profile();
});

describe("Page Profile", () => {
    it("should has required keys in props", () => {
        expect(profile.props)
            .to.include.all.keys("key", "buttonBack", "buttonEdit", "buttonLogout")
    })

    it("should render a string", () => {
        expect(profile.render()).to.be.a("string")
    })
})