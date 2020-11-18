import {expect} from "chai";
import {store} from "../../store/Store";
import Profile from "./Profile";

// todo переписать когда будет доступ к API
store.props = {
    user: {
        id: 0,
        first_name: "Алекс",
        second_name: "Первый",
        display_name: "zelenzoom",
        login: "login123456",
        email: "test2834528@test.ru",
        phone: "+7555555555555",
        avatar: "/img/ava2.jpg",
    }
}

const profile = new Profile();

describe("Page Profile", () => {
    it("should has required keys in props", () => {
        expect(profile.props)
            .to.have.keys("key", "buttonBack", "buttonEdit", "buttonLogout")
    })

    it("should render a string", () => {
        expect(profile.render()).to.be.a("string")
    })
})