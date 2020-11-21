import Profile  from "./Profile";
import {getType}       from "../../utils/helpers";

let profile: Profile;

beforeEach(() => {
  profile = new Profile();
});

describe("Page Profile", () => {
  it("should has required keys in props", () => {
    expect(profile.props).toHaveProperty("_key")
    expect(profile.props).toHaveProperty("buttonBack")
    expect(profile.props).toHaveProperty("buttonEdit")
    expect(profile.props).toHaveProperty("buttonLogout")
  });

  it("should render a string", () => {
    expect(getType(profile.render())).toEqual("string");
  });
});