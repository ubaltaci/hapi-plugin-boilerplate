import Hapi from "hapi";
import Code from "code";
import Lab  from "lab";
const lab = exports.lab = Lab.script();

const describe = lab.describe;
const it = lab.it;
const before = lab.before;
const after = lab.after;
const expect = Code.expect;


describe("Hapi Plugin Boilerplate", () => {

    it("returns my name", (done) => {

        const server = new Hapi.Server();
        server.connection();

        server.register(require("../dist/index.js"), (error) => {

            expect(error).to.not.exist();

            const request = {
                method: "GET",
                url: "/say/my/name/johndoe"
            };

            server.inject(request, (res) => {
                expect(res.result).to.equal("johndoe");
                done();
            });
        });
    });
});