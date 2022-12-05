function basicAPI(req, res) {
    res.status(200).json({
        "success": true
    });
}

function testAPI(req, res) {
    res.status(200).json({
        "message": test
    });
}

function postestAPI(req, res) {
    const user_message = req.body.message;
    res.status(200).json({
        "success": user_message
    });
}

module.exports = {
    basicAPI: basicAPI,
    testAPI: testAPI,
    postestAPI: postestAPI,
}