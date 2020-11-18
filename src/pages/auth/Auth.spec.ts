import {expect} from "chai";
import Auth from "./Auth";

const auth = new Auth();
const form = auth.props.form;
const formProps = form.props;

describe("Page Auth", () => {
    it("should has required keys in props", () => {
        expect(auth.props)
            .to.have.all.keys("key", "form")
    })

    it("should render a string", () => {
        expect(auth.render()).to.be.a("string")
    })

    describe("Form", () => {
        it("should has required keys in props", () => {

            expect(formProps)
                .to.have.keys("key", "listeners", "elements")
        })

        it("should 1 listener", () => {
            expect(formProps.listeners.length).to.equal(1)
        })

        it("listeners should has a submit event", () => {
            expect(formProps.listeners[0])
                .to.have.property("event", "submit")
        })

        it("should 4 elements", () => {
            expect(formProps.elements.length).to.equal(4)
        })
    })
})