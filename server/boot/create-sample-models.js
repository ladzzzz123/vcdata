module.exports = function(app) {
	app.dataSources.vcdata.automigrate('member', function(err) {
	    if (err) throw err;

	    // app.models.member.create([
	    //   {member_name: 'William Wang', member_id: 'test_id_01'}
	    // ], function(err, members) {
	    //   if (err) throw err;
	    //   console.log('Models created: \n', members);
	    // });
	  });
};