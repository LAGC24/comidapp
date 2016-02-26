/**
 * Created by LAGC24 on 2/25/2016.
 */
/**
 * Created by Edmundo on 2/24/2016.
 */

exports.root = function(req, res) {
  //resp.sendFile(__dirname + '/app/login.html');
  res.sendFile(req.app.get('viewsDir') + '/login.html');
};
