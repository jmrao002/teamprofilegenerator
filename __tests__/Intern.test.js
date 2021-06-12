const Intern = require("../lib/Intern");

describe("Intern class", () => {
  it("Has a school attribute", () => {
    const e = new Intern(4, "Ryan", "ryan@dunder.com", "Blues Clues");
    expect(e.school).toBe("Blues Clues");
  });

  it("Can get role via getRole()", () => {
    const e = new Intern(4, "Ryan", "ryan@dunder.com", "Blues Clues");
    expect(e.getRole()).toBe("Intern");
  });

  it("Can get school via getSchool()", () => {
    const e = new Intern(4, "Ryan", "ryan@dunder.com", "Blues Clues");
    expect(e.getSchool()).toBe("Blues Clues");
  });
});
