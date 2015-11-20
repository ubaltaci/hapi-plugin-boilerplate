// Declare internals
let internals = {};

exports.register = (server, options, next) => {

    internals.implementation(server, options);
    return next();
};

exports.register.attributes = {
    pkg: require("../package.json")
};

internals.implementation = (server, options) => {

    // Plugin logic goes here!
    server.route({
        path: "/say/my/name/{name}",
        method: "GET",
        config: {
            auth: false,
            handler: (request, reply) => {
                reply(request.params.name);
            }
        }
    });
};
