module.exports = async function (context, req, who) {
    context.log('JavaScript HTTP trigger function processed a request.');

    context.res.json(who);
}